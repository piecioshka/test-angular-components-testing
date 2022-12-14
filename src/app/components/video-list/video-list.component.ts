import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { VideosService } from 'src/app/services/videos/videos.service';
import { Video } from 'src/app/interfaces/video.interface';

@Component({
  selector: 'app-videos',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  private videos$: Observable<Video[]> = null;
  displayVideos$: Observable<Video[]> = null;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.displayVideos$ = this.videos$ = this.videosService.fetchVideos();
  }

  onSearch(query) {
    this.displayVideos$ = this.videos$.pipe(
      map((videos) => {
        return videos.filter((video) => {
          return new RegExp(query, 'i').test(video.title);
        });
      })
    );
  }
}
