import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTiserComponent } from './carousel-tiser.component';

describe('CarouselTiserComponent', () => {
  let component: CarouselTiserComponent;
  let fixture: ComponentFixture<CarouselTiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
