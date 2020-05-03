import { of } from 'rxjs';

import DUMMY_VIDEOS from 'src/dummies/videos.dummy.json';

export class FakeVideosService {
  fetchVideos() {
    return of(DUMMY_VIDEOS);
  }
}
