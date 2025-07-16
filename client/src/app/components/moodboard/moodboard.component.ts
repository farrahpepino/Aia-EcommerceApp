import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { ImageUploadDirective } from '../../directives/image-upload.directive';
import { FileHandle } from '../../directives/file-handle';
@Component({
  selector: 'app-moodboard',
  imports: [ CdkDrag, CommonModule, ImageUploadDirective],
  templateUrl: './moodboard.component.html',
  styleUrl: './moodboard.component.css'
})
export class MoodboardComponent implements OnInit {  
  uploadedFiles: FileHandle[] = [];  
  constructor() {}  
  ngOnInit(): void {}  
  filesDropped(files: FileHandle[]) {  
      this.uploadedFiles = files;  
  }  

  
  
}
