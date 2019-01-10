import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclerentaComponent } from './vehiclerenta.component';

describe('VehiclerentaComponent', () => {
  let component: VehiclerentaComponent;
  let fixture: ComponentFixture<VehiclerentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclerentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclerentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
