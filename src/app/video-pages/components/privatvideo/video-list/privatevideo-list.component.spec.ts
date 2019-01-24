import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateVideoListComponent } from './privatevideo-list.component';

describe('VideoListComponent', () => {
  let component: PrivateVideoListComponent;
  let fixture: ComponentFixture<PrivateVideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateVideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
