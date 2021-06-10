using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebSERVER.Models;

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly WebServerContext _context;

        public TeamController(WebServerContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("AddTeam")]
        public async Task<Object> AddTeam(Team team)
        {
            //PREOSTAJE VALIDACIJA NA FRONTU I NA BACKU,MIN 1 CLAN DA POSTOJI I DUZINA STR I BUTTON DISABLE

            var tim = _context.Teams.FirstOrDefault(x => x.TeamId.Equals(team.TeamId));
            if (tim!=null)
            {
                //postoji vec tim sa tim idijem     PRIJAVITI
                var result = "Postoji sa tim id-jem";
                return Ok(result);  //???duga povratna vrednost
            }

            //ako ne postoji
            try
            {
                var clanovi = team.Members;
                foreach (var clan in clanovi)
                {
                    Console.WriteLine(clan);
                    _context.Members.Add(new MemberOfTeam { MemberTeamId = team.TeamId, MemberUserName = clan as string});
                }
                _context.Teams.Add(team);
                await _context.SaveChangesAsync();
                var result = "Uspesno kreiran tim";
                return Ok(result);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                throw e;
            }
        }
    }
}
