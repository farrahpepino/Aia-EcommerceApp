import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';
import { FileHandle } from './file-handle';
import { DomSanitizer } from '@angular/platform-browser';
@Directive({
  selector: '[appImageUpload]'
})
export class ImageUploadDirective {
  @Output('files') files: EventEmitter < FileHandle[] > = new EventEmitter();  
  @HostBinding('style.background') public background = backgroundColor.Default;  
  
  constructor(private sanitizer: DomSanitizer) {}  

  @HostListener('dragover', ['$event']) public onDragOver(event:DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.background = backgroundColor.Drag;  
  }
  @HostListener('dragleave', ['$event']) public onDragLeave(event:DragEvent){
    event.preventDefault();
    event.stopPropagation();
    this.background = backgroundColor.Default;  
  }
    @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {  
    event.preventDefault();
    event.stopPropagation();
    this.background = backgroundColor.Dropped;  
    let files: FileHandle[] = [];  
    if (!event.dataTransfer) {
      return; 
    }
    for (let i = 0; i < event.dataTransfer.files.length; i++) {  
        const file = event.dataTransfer.files[i];  
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));  
        files.push({  
            file,  
            url  
        });  
    }  
    if (files.length > 0) {  
        this.files.emit(files);  
    }  
}

}

enum backgroundColor {

  Drag = '#999',
  Dropped = '#ffffff',
  Default = '#eee'
}
