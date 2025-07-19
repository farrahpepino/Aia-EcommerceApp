import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Moodboard {
  id?: number;
  userId: string;
  name: string;
}

export interface MoodboardFile {
  id?: number;
  moodboardId: number;
  filePath: string;
  positionX: number;
  positionY: number;
}

export interface PositionDto {
  x: number;
  y: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoodboardService {
  private api = 'http://localhost:5005/moodboard';

  constructor(private http: HttpClient) {}

  createMoodboard(moodboard: Moodboard): Observable<Moodboard> {
    return this.http.post<Moodboard>(`${this.api}`, moodboard);
  }

  getMoodboard(id: number): Observable<Moodboard> {
    return this.http.get<Moodboard>(`${this.api}/${id}`);
  }

  uploadFile(moodboardId: number, file: MoodboardFile): Observable<MoodboardFile> {
    return this.http.post<MoodboardFile>(`${this.api}/${moodboardId}/files`, file);
  }

  updateFilePosition(fileId: number, position: PositionDto): Observable<void> {
    return this.http.put<void>(`${this.api}/files/${fileId}/position`, position);
  }


}
