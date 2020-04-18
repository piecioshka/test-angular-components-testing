import { of } from 'rxjs';

import VIDEOS_FIXTURE from '../../../fixtures/videos.fixture.json';

export class FakeVideosService {
  fetchVideos() {
    return of(VIDEOS_FIXTURE);
  }
}
