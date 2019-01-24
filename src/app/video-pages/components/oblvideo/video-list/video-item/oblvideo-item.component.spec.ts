import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblVideoItemComponent } from './oblvideo-item.component';

describe('VideoItemComponent', () => {
  let component: OblVideoItemComponent;
  let fixture: ComponentFixture<OblVideoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OblVideoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
