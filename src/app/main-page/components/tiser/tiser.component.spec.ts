import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiserComponent } from './tiser.component';

describe('TiserComponent', () => {
  let component: TiserComponent;
  let fixture: ComponentFixture<TiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
