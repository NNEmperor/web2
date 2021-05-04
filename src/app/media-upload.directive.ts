import { Directive, Output, Input, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMediaUpload]'
})
export class MediaUploadDirective {

  //fileDropped!:File;
  @Output() fileDropped = new EventEmitter<any>();

  @HostBinding('class.fileover') fileOver!:boolean;
  constructor() { }
  @HostListener('dragover',['$event']) onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();

    console.log('drag over');
  }

  @HostListener('dragleave',['$event']) onDragLeave(evt){
    evt.preventDefault();
    evt.stopPropagation();
  
    console.log('drag leave');
  }

    @HostListener('drop',['$event']) ondrop(evt){
      evt.preventDefault();
      evt.stopPropagation();
      this.fileOver=false;
      const files=evt.dataTransfer.files;
        if(files.length>0){
          console.log('prebaceni droped files');
          this.fileDropped.emit(files);
        }
      
      }

}
