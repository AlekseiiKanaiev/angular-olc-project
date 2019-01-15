import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTiserComponent } from './video-tiser.component';

describe('TiserComponent', () => {
  let component: VideoTiserComponent;
  let fixture: ComponentFixture<VideoTiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
