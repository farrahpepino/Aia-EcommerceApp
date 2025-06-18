import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { FileHandle } from '../../directives/file-handle';
import { ImageDragDirective } from '../../directives/image-drag.directive';

@Component({
  selector: 'app-moodboard',
  imports: [NgOptimizedImage, CdkDrag, ImageDragDirective, CommonModule],
  templateUrl: './moodboard.component.html',
  styleUrl: './moodboard.component.css'
})
export class MoodboardComponent  implements OnInit {  
  uploadedFiles: FileHandle[] = [];
  constructor() {}  
  ngOnInit(): void {}  
  filesDropped(files: FileHandle[]) {  
      this.uploadedFiles = files;  
  }  

}
