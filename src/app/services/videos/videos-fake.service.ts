import { of } from 'rxjs';

import FIXTURE_VIDEOS from 'src/fixtures/videos.fixture.json';

export class FakeVideosService {
  fetchVideos() {
    return of(FIXTURE_VIDEOS);
  }
}
