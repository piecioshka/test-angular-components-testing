import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { VideosService } from './videos.service';
import { environment } from 'src/environments/environment';
import VIDEOS_FIXTURE from '../../../fixtures/videos.fixture.json';

describe('VideosService', () => {
  let service: VideosService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VideosService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return videos', () => {
    service.fetchVideos().subscribe({
      next: (videos) => {
        expect(videos.length).toBeGreaterThan(0);
      },
    });

    const request = http.expectOne(environment.videosUrl);
    request.flush(VIDEOS_FIXTURE);
  });
});
