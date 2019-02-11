import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrendaButtonComponent } from './orenda-button.component';

describe('OrendaButtonComponent', () => {
  let component: OrendaButtonComponent;
  let fixture: ComponentFixture<OrendaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrendaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrendaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
