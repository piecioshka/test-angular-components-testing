import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideosSearchComponent } from './components/videos-search/videos-search.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    VideoListComponent,
    VideosSearchComponent,
    VideoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
