import { CarouselTeamModule } from './carousel-team.module';

describe('CarouselTeamModule', () => {
  let carouselTeamModule: CarouselTeamModule;

  beforeEach(() => {
    carouselTeamModule = new CarouselTeamModule();
  });

  it('should create an instance', () => {
    expect(carouselTeamModule).toBeTruthy();
  });
});
