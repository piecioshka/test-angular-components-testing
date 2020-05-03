import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-videos-search',
  templateUrl: './videos-search.component.html',
  styleUrls: ['./videos-search.component.css'],
})
export class VideosSearchComponent {
  @Output() onSearch = new EventEmitter<string>();

  query: string = null;

  onSubmit() {
    this.onSearch.emit(this.query);
  }

  onReset() {
    this.onSearch.emit('');
  }
}
