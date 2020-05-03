import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { VideosSearchComponent } from './videos-search.component';

describe('VideosSearchComponent', () => {
  let $component: HTMLElement;
  let component: VideosSearchComponent;
  let fixture: ComponentFixture<VideosSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideosSearchComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosSearchComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit query', fakeAsync((done) => {
    $component.querySelector<HTMLInputElement>('input[type="text"]').value = 'abc';
    component.onSearch.subscribe((query) => {
      expect(query).toEqual('abc');
      done();
    })
    fixture.debugElement
      .query(By.css('input[type="submit"]'))
      .triggerEventHandler('click', {});
    tick();
  }));
});
