import { Component, HostListener, OnInit , ViewChild, ElementRef } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';
import { MessagePassingService } from '../message-passing.service';

@Component({
  selector: 'app-workreq-multimedia',
  templateUrl: './workreq-multimedia.component.html',
  styleUrls: ['./workreq-multimedia.component.css']
})

export class WorkreqMultimediaComponent implements OnInit {

  //files:any[]=[];
  @ViewChild("fileDropRef", { static: false }) fileDropEl!: ElementRef;
  files: any[] = [];
  fileUrls:SafeResourceUrl[]=[];
  
  //  
  imagePath="assets/images/apple-icon-120x120.png";
  slika;
  constructor(private sanitizer: DomSanitizer, private service: MessagePassingService) {
    this.service.changeData("WORK REQUEST - NEW - Multimedia attachments")
   }

  ngOnInit(): void {

   
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
            this.files[index].progress += 5;
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

    //var nizSlika:any[]=[];

    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      //var nizSlika:Array<any>;
     // this.slika=item;
     // nizSlika.push(item);
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

 /* getfileUrl(i: number){

    this.fileUrlFINISH= this.fileUrl[i];
  }*/

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


