import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessagePassingService } from '../message-passing.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: MessagePassingService ) {
    this.service.changeData("DASHBOARD")
   }

  ngOnInit(): void {
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
