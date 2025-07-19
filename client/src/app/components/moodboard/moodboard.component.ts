import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { ImageUploadDirective } from '../../directives/image-upload.directive';
import { FileHandle } from '../../directives/file-handle';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { MoodboardService } from '../../services/moodboard.service';

@Component({
  selector: 'app-moodboard',
  imports: [ CdkDrag, CommonModule, ImageUploadDirective],
  templateUrl: './moodboard.component.html',
  styleUrl: './moodboard.component.css'
})
export class MoodboardComponent implements OnInit {  
  uploadedFiles: FileHandle[] = [];  
  constructor(private moodboardService: MoodboardService) {}
  ngOnInit(): void {
   
  }  
  filesDropped(files: FileHandle[]) {  
      this.uploadedFiles = files;  
      //create moodboard and upload files in moodboard
      const moodboard = { userId: '4eb99dea-f94c-465a-9853-320d7391dfa0', name: 'My Moodboard' };

  this.moodboardService.createMoodboard(moodboard).subscribe(created => {
    const id = created.id!;

    files.forEach((file, i) => {
      const moodboardFile = {
        moodboardId: id,
        filePath: file.url as string,
        positionX: 0,
        positionY: 0
      };

      this.moodboardService.uploadFile(id, moodboardFile).subscribe(() => {
        console.log(`File ${i} uploaded`);
      });
    });
  });
  }
  
  onDragEnd(event: CdkDragEnd, index: number) {
    const { x, y } = event.source.getFreeDragPosition();
    const file = this.uploadedFiles[index];
    console.log(`File ${file.file.name} moved to position`, { x, y });
    //update position
    if (file.index) {
      this.moodboardService.updateFilePosition(file.index, { x, y }).subscribe({
        next: () => console.log('Position updated'),
        error: err => console.error('Position update failed', err)
      });
    }
  }

  
  
 
  
  
  
}
