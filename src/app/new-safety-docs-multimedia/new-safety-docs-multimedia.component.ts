
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { NotifierService } from 'angular-notifier';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-new-safety-docs-multimedia',
  templateUrl: './new-safety-docs-multimedia.component.html',
  styleUrls: ['./new-safety-docs-multimedia.component.css']
})
export class NewSafetyDocsMultimediaComponent implements OnInit {

  @ViewChild("fileDropRef", { static: false }) fileDropEl!: ElementRef;
  files: any[] = [];
  fileUrls:SafeResourceUrl[]=[];
  FileFormData=new FormData();//za slanje slike
  
  imagePath="assets/images/apple-icon-120x120.png";
  slika;

  constructor(private sanitizer: DomSanitizer, private service: MessagePassingService) {
    this.service.changeData("INCIDENTS - NEW")

  }

  ngOnInit(): void {
  }
  
  DiscardImages(){
    this.files=[]
  }

  SaveImages(){
    var myArray = [] as any;
    var file={};

    for (var i = 0; i < this.files.length; i++) { 
      const formData = new FormData();
      formData.append('file', this.files[i]);
      console.log(this.files[i])

      file=this.files.toString();
      let tt=file;

    //add the file obj to your array
      myArray.push(tt)

      this.service.sendDocMedia(formData);

      console.log(JSON.stringify(myArray));
      this.files=[];

    }
  
  }
  

  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler($event) {
    let nes=$event?.target.files;
    this.prepareFilesList(nes);
  }

  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
    this.fileUrls.splice(index,1);  //takodje valjda
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  prepareFilesList(files: Array<any>) {

    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      
      const data =item;//this.imagePath ;
      const blob = new Blob([data], { type: 'image/jpeg' });
      console.log("krece se kroz niz slika.....")
      let nes=this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
      console.log(nes);
      this.fileUrls.push(nes);
    
    }

    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 25;
          }
        }, 200);
      }
    }, 1000);
  }

  
}
 
 