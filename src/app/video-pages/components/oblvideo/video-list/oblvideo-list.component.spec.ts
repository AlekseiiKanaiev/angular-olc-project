import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblVideoListComponent } from './oblvideo-list.component';

describe('VideoListComponent', () => {
  let component: OblVideoListComponent;
  let fixture: ComponentFixture<OblVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
