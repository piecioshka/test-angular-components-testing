import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoListComponent } from 'src/app/components/video-list/video-list.component';
import { VideosSearchComponent } from 'src/app/components/videos-search/videos-search.component';
import { VideoComponent } from 'src/app/components/video/video.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        VideoListComponent,
        VideoComponent,
        VideosSearchComponent,
      ],
      imports: [HttpClientTestingModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
