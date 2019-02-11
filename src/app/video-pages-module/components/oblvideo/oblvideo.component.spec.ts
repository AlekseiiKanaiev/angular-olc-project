import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblvideoComponent } from './oblvideo.component';

describe('OblvideoComponent', () => {
  let component: OblvideoComponent;
  let fixture: ComponentFixture<OblvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
