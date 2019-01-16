import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTeamComponent } from './carousel-team.component';

describe('CarouselTeamComponent', () => {
  let component: CarouselTeamComponent;
  let fixture: ComponentFixture<CarouselTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
