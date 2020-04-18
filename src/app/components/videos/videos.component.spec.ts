import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { of } from 'rxjs';

import { VideosComponent } from './videos.component';
import { FakeVideosService } from 'src/app/services/videos/videos-fake.service';
import { VideosService } from 'src/app/services/videos/videos.service';

import VIDEOS_FIXTURE from '../../../fixtures/videos.fixture.json';

describe('VideosComponent', () => {
  let videosService: VideosService;
  let component: VideosComponent;
  let fixture: ComponentFixture<VideosComponent>;
  let $component: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideosComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: VideosService, useClass: FakeVideosService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    videosService = TestBed.get(VideosService);
    fixture = TestBed.createComponent(VideosComponent);
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
    spyOn(videosService, 'fetchVideos').and.returnValue(of(VIDEOS_FIXTURE.splice(0, 5)));
    fixture.detectChanges(); // ngOnInit
    expect($component.querySelectorAll('.video').length).toEqual(5);
  });
});
