import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Video } from 'src/app/interfaces/video.interface';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent implements OnInit {
  @Input() video: Video = null;

  constructor() {}

  ngOnInit(): void {}
}
