import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateVideoItemComponent } from './privatevideo-item.component';

describe('VideoItemComponent', () => {
  let component: PrivateVideoItemComponent;
  let fixture: ComponentFixture<PrivateVideoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateVideoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateVideoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
