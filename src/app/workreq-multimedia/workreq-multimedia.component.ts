import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit , ViewChild, ElementRef } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { map } from 'rxjs/operators';
import { MessagePassingService } from '../message-passing.service';
import { WorkReqServiceService } from '../work-req-service.service';

@Component({
  selector: 'app-workreq-multimedia',
  templateUrl: './workreq-multimedia.component.html',
  styleUrls: ['./workreq-multimedia.component.css']
})

export class WorkreqMultimediaComponent implements OnInit {

  @ViewChild("fileDropRef", { static: false }) fileDropEl!: ElementRef;
  files: any[] = [];
  fileUrls:SafeResourceUrl[]=[];
  FileFormData=new FormData();//za slanje slike
  private readonly notifier!: NotifierService;
  
  imagePath="assets/images/apple-icon-120x120.png";
  slika;
  constructor(private sanitizer: DomSanitizer, private service: MessagePassingService,private router: Router, private wrServis:WorkReqServiceService, private http:HttpClient, notifierService: NotifierService) {
    this.service.changeData("WORK REQUEST - NEW - Multimedia attachments")
    this.notifier = notifierService;

  }

  ngOnInit(): void {
  
    var idwr=localStorage.getItem("id-wr");
    this.wrServis.SendID(idwr).subscribe(res=>{
      console.log(idwr)
    })
    //cuvati file urls kao nikola, pitati ga sutra

  // console.log('//////   '+obj)
   //console.log(obj)
    //var json=localStorage.getItem("media");
    //console.log("sliiiike----")
    //console.log(json)

    //var niz=JSON.parse(json as string)
    //console.log(niz[0])
  
    //const blob = new Blob([niz[0]], { type: 'image/jpeg' });
    //console.log("krece se kroz niz slika.....")
    //this.JSONSLIKA=this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    
    
  }
  DiscardImages(){
    this.files=[]
  }
 
  SaveImages(){
    /*for(let item in this.files){
      let fileToUpload=item //as File;
      this.FileFormData=new FormData();//da li resetuje
      this.FileFormData.append('file',fileToUpload);
    }*/
   
    var myArray = [] as any;
    var file={};
    
    //localStorage.setItem("media",)
    for (var i = 0; i < this.files.length; i++) { 

     // this.FileFormData.append("file", <File>this.files[i]);

    
      const formData = new FormData();
      formData.append('file', this.files[i]);
      console.log(this.files[i])
      /*file = {
        'lastMod'    : this.files[i].lastModified,
        'lastModDate': this.files[i].lastModifiedDate,
        'name'       : this.files[i].name,
        'size'       : this.files[i].size,
        'type'       : this.files[i].type,
    } */
    file=this.files.toString();
    let tt=file;

    //add the file obj to your array
    myArray.push(tt)
      //
        
      // */

      this.http.post('http://localhost:55333/api/WorkRequest/CreateImage', formData).subscribe(res=>
      {
        console.log(res)
      }, (err:HttpErrorResponse) => {
        console.log(err)
        
        let message= err.error.text;
       
       if(message==="Successfully added photo to work request"){
        this.notifier.notify('default', message);
        //   
        
      }
      console.log(JSON.stringify(myArray));
      var slikeJson=JSON.stringify(myArray);
      //localStorage.setItem("media",slikeJson)
      this.files=[];
//osvezi stranicu
     // this.router.navigateByUrl('/home/workreq-new/workreq-multimedia');
        
       
     })
  }

  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event) {
    let nes=$event?.target.files;
    this.prepareFilesList(nes);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
    this.fileUrls.splice(index,1);  //takodje valjda
  }

  /**
   * Simulate the upload process
   */
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

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
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

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
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
}


