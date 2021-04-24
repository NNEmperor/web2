import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-incident-multimedia',
  templateUrl: './new-incident-multimedia.component.html',
  styleUrls: ['./new-incident-multimedia.component.css']
})
export class NewIncidentMultimediaComponent implements OnInit {

  public files: any[];

  constructor() {
    this.files = [];
   }

  ngOnInit(): void {
  }

  contructor() { this.files = []; }
  
  onFileChanged(event: any) {
    this.files = event.target.files;
  }
  
  onUpload() {
    const formData = new FormData();
    for (const file of this.files) {
        formData.append(file, file.name);
    }
    //this.http.post('url', formData).subscribe(x => ....);
  }

}
