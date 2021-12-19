import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { of } from 'rxjs';

import FIXTURE_VIDEOS from 'src/fixtures/videos.fixture.json';
import { VideoListComponent } from './video-list.component';
import { FakeVideosService } from 'src/app/services/videos/videos-fake.service';
import { VideosService } from 'src/app/services/videos/videos.service';
import { VideosSearchComponent } from 'src/app/components/videos-search/videos-search.component';
import { VideoComponent } from 'src/app/components/video/video.component';

describe('VideoListComponent', () => {
  let videosService: VideosService;
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;
  let $component: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [VideoListComponent, VideoComponent, VideosSearchComponent],
      providers: [{ provide: VideosService, useClass: FakeVideosService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    videosService = TestBed.get(VideosService);
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Use Providers
  it('should display thumbnails after init', () => {
    fixture.detectChanges(); // ngOnInit
    expect($component.querySelectorAll('.video').length).toBeGreaterThan(0);
  });

  // Use Spy
  it('should fetch videos from server', () => {
    spyOn(videosService, 'fetchVideos');
    fixture.detectChanges(); // ngOnInit
    expect(videosService.fetchVideos).toHaveBeenCalled();
  });

  // Use Stub
  it('should display thumbnails after init', () => {
    spyOn(videosService, 'fetchVideos').and.returnValue(
      of(FIXTURE_VIDEOS.splice(0, 5))
    );
    fixture.detectChanges(); // ngOnInit
    expect($component.querySelectorAll('.video').length).toEqual(5);
  });
});
