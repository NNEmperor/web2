import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-report-problem',
  templateUrl: './report-problem.component.html',
  styleUrls: ['./report-problem.component.css']
})
export class ReportProblemComponent implements OnInit {

  reportForm: FormGroup = new FormGroup({
    'name' : new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'address': new FormControl('', Validators.required),
    'city': new FormControl('', Validators.required),
    'zipcode': new FormControl('', Validators.required),
    'reason': new FormControl('', Validators.required),
    'hazard': new FormControl('', Validators.required),
    'comment': new FormControl('', Validators.required),
});

constructor(private service: MessagePassingService ) {
  this.service.changeData("REPORTING PROBLEM")
 }
  ngOnInit(): void {
  }

  onSubmit(){
    //cuvanje u bazi
  }

}
