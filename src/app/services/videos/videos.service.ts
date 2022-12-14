import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Video } from 'src/app/interfaces/video.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private http: HttpClient) {}

  fetchVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(environment.videosUrl);
  }
}
