import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubInfoListComponent } from './pub-info-list.component';

describe('PubInfoContentComponent', () => {
  let component: PubInfoListComponent;
  let fixture: ComponentFixture<PubInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
