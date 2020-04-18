import { Component, OnInit } from '@angular/core';

import { VideosService } from 'src/app/services/videos/videos.service';
import { VideoList } from 'src/app/interfaces/videos.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {

  videos$: Observable<VideoList> = null;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videos$ = this.videosService.fetchVideos();
  }
}
