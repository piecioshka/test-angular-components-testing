import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { VideoList } from 'src/app/interfaces/video-list.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  constructor(private http: HttpClient) {}

  fetchVideos(): Observable<VideoList> {
    return this.http.get<VideoList>(environment.videosUrl);
  }
}
