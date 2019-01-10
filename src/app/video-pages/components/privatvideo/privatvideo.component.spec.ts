import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatvideoComponent } from './privatvideo.component';

describe('PrivatvideoComponent', () => {
  let component: PrivatvideoComponent;
  let fixture: ComponentFixture<PrivatvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
