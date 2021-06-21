using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebSERVER.Models;

namespace WebSERVER.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        private readonly WebServerContext _context;
        private UserManager<ApplicationUser> _userManager;
        public TeamController(WebServerContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        internal static string GetRandomString(int stringLength)
        {
            StringBuilder sb = new StringBuilder();
            int numGuidsToConcat = (((stringLength - 1) / 32) + 1);
            for (int i = 1; i <= numGuidsToConcat; i++)
            {
                sb.Append(Guid.NewGuid().ToString("N"));
            }

            return sb.ToString(0, stringLength);
        }
        [HttpGet]
        [Route("GenerateTeamID")]
        public async Task<Object> GenerateTeamID()
        {
            string result = GetRandomString(10);
            return  Ok(result);
        }

        [HttpPost]
        [Route("GetTeam")]
        public async Task<ActionResult<Team>> GetTeam([FromForm] string timId)
        {
             var tim = _context.Teams.FirstOrDefault(x => x.TeamId.Equals(timId));//nastaviti
            //tim.Members = new List<object>();
            //foreach(var clan in _context.Members.ToList())
            //{
            //    if (clan.MemberTeamId.Equals(timId))
            //    {
            //        tim.Members.Add(clan.MemberUserName);
            //    }
            //}
           return tim;
           //return Ok("poruka");
        }
        [HttpPost]
        [Route("GetMembers")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetMembers([FromForm] string timId)
        {
            List<ApplicationUser> members = new List<ApplicationUser>();
           
            foreach (var clan in _context.Members.ToList())
            {
                if (clan.MemberTeamId.Equals(timId))
                {
                    //treba naci sa tim usernamom
                    members.Add(await _userManager.FindByNameAsync(clan.MemberUserName));
                }
            }
            return members;
        }

        [HttpPost]
        [Route("GetFreeMembers")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetFreeMembers([FromForm] string timId)
        {
            List<ApplicationUser> freeMembers = new List<ApplicationUser>();
            List<MemberOfTeam> members = new List<MemberOfTeam>();//koji su vec clanovi

            foreach (var clan in _context.Members.ToList())
            {
                if (clan.MemberTeamId.Equals(timId))
                {
                    //treba naci sa tim usernamom
                    members.Add(clan);
                }
            }

            foreach (var user in _userManager.Users.ToList())
            {
                if(user.Status.Equals("prihvacen") && user.UserRole.ToUpper().Equals("CLAN EKIPE"))
                {
                    var temp = members.FirstOrDefault(x => x.MemberUserName.Equals(user.UserName));//ako nije null postoji, ako je null FREE JE
                    if (temp == null)
                    {
                        freeMembers.Add(user);
                    }
                }
            }
            return freeMembers;
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
                //return NotFound();
            }
            else if (team.Members.Count() == 0)
            {
                //nema nijednig clana ne moze
                var result = "Mora biti bar jedan clan";
                //return NotFound();
                return Ok(result);

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

        [HttpPost]
        [Route("UpdateTeam")]
        public async Task<Object> UpdateTeam(Team team)
        {
            var tim = _context.Teams.FirstOrDefault(x => x.TeamId.Equals(team.TeamId));
            if (tim == null)
            {
                //obrisam tim sa tim idijem     PRIJAVITI
                var result = "Ne postoji tim sa tim id-jem";
                return Ok(result); 
                //return NotFound();
            }
            else if (team.Members.Count() == 0)
            {
                //nema nijednig clana ne moze
                var result = "Mora biti bar jedan clan";
                return Ok(result);

            }

            try
            {
                foreach (var clan in _context.Members.ToList())
                {
                    if (clan.MemberTeamId.Equals(tim.TeamId) && !team.Members.Contains(clan.MemberUserName))//obrisi onog koji nije vise u timu
                    {
                        //
                        _context.Members.Remove(clan);
                    }else if(clan.MemberTeamId.Equals(tim.TeamId) && team.Members.Contains(clan.MemberUserName))
                    {
                        team.Members.Remove(clan.MemberUserName);//obrisi iz liste da bi normalno prolazio i dodao potrebne
                    }
                }

                var clanovi = team.Members;
                foreach (var clan in clanovi)
                {
                    Console.WriteLine(clan);
                    _context.Members.Add(new MemberOfTeam { MemberTeamId = tim.TeamId, MemberUserName = clan as string });
                }
                //_context.Teams.Update(team);
                tim.TeamName = team.TeamName;

                await _context.SaveChangesAsync();
                var result = "Uspesno izmenjen tim";
                return Ok(result);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                throw e;
            }
        }

        [HttpGet]
        [Route("GetAllTeams")]
        public async Task<ActionResult<IEnumerable<Team>>> GetAllTeams()
        {
            //return await _userManager.Users.Where(x => x.Status.ToUpper().Equals("PROCESIRA")).ToListAsync();
            var timovi = _context.Teams.ToList();
            var clanovi = _context.Members.ToList();

            for (int i=0;i<timovi.Count;i++)
            {
                timovi[i].Members = new List<object>();
                foreach (var clan in clanovi )
                {
                    
                    if ((clan.MemberTeamId).Equals( timovi[i].TeamId))
                    {
                        foreach (var user in _userManager.Users.Where(x => x.UserRole.Equals("clan ekipe")).ToList())
                        {
                            if (user.UserName.Equals(clan.MemberUserName) && user.Status.ToUpper().Equals("PRIHVACEN"))
                            {
                                timovi[i].Members.Add(clan.MemberUserName);
                            }
                        }
                    }
                }
            }

            return timovi;
        }

        [HttpPost]
        [Route("DeleteTeam")]
        public async Task<ActionResult> DeleteTeam([FromForm] string teamId)
        {
            var obrisiTim = _context.Teams.Where(x => x.TeamId.Equals(teamId)).Single();
            _context.Teams.Remove(obrisiTim);

            //obrisati i sve clanove
            foreach(var clan in _context.Members.ToList())
            {
                if (clan.MemberTeamId.Equals(teamId))
                {
                    _context.Members.Remove(clan);
                }
            }

            await _context.SaveChangesAsync();

            var result = "Uspesno obrisan tim i njegovi clanovi";
            return Ok(result);
        }
    }
}
