import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPagesComponent } from './video-pages.component';

describe('VideoPagesComponent', () => {
  let component: VideoPagesComponent;
  let fixture: ComponentFixture<VideoPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
