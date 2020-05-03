import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { VideosService } from 'src/app/services/videos/videos.service';
import { VideoList } from 'src/app/interfaces/video-list.interface';

@Component({
  selector: 'app-videos',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  private videos$: Observable<VideoList> = null;
  displayVideos$: Observable<VideoList> = null;

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
