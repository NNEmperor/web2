import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName =  (localStorage.getItem("userName"))

  numOfDraftsIncidents = '';
  numOfCanceledIncidents = '';
  numOfExecutingIncidents = '';
  numOfCompletedIncidents = '';
  numOfIncidents = '';

  numOfDraftsDoc = '';
  numOfCanceledDocs = '';
  numOfExecutingDocs = '';
  numOfCompletedDocs = '';
  numOfDocs = '';

  constructor(private service: MessagePassingService ) {
    this.service.changeData("DASHBOARD")

  }


  ngOnInit(): void {
    this.service.getMineStatuses(this.userName).subscribe(res =>{


      
      this.numOfDraftsIncidents = res[0] as string;
      this.numOfCanceledIncidents = res[1] as string;
      this.numOfExecutingIncidents = res[2] as string;
      this.numOfCompletedIncidents = res[3] as string;
      this.numOfIncidents = res[4] as string;

      this.numOfDraftsDoc = res[5] as string;
      this.numOfCanceledDocs = res[6] as string;
      this.numOfExecutingDocs = res[7] as string;
      this.numOfCompletedDocs = res[8] as string;
      this.numOfDocs = res[9] as string;

      console.log(res)
    })
  }


  dataPie = [
    { MarketShare: 30, Company: "Google",    },
    { MarketShare: 30, Company: "Apple",     },
    { MarketShare: 15, Company: "Microsoft", },
    { MarketShare: 15, Company: "Samsung",   },
    { MarketShare: 10, Company: "Other",     },
  ];

  
 data = [
  { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
  { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
 ];

 public dataSource: any[] = SampleCategoryData.create();

}

export class SampleCategoryData {

  public static create(): any[] {
      const data: any[] = [];
      // total olympic medals for top countries
      data.push({"Year": "1996", "USA": 148, "CHN": 110, "RUS": 95});
      data.push({"Year": "2000", "USA": 142, "CHN": 115, "RUS": 91});
      data.push({"Year": "2004", "USA": 134, "CHN": 121, "RUS": 86});
      data.push({"Year": "2008", "USA": 131, "CHN": 129, "RUS": 65});
      data.push({"Year": "2012", "USA": 135, "CHN": 115, "RUS": 77});
      data.push({"Year": "2016", "USA": 146, "CHN": 112, "RUS": 88});
      return data;
  }
}
