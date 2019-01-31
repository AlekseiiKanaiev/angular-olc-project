import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubInfoComponent } from './pub-info.component';

describe('PubInfoComponent', () => {
  let component: PubInfoComponent;
  let fixture: ComponentFixture<PubInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
