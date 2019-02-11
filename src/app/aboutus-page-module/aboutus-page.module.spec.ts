import { AboutusPageModule } from './aboutus-page.module';

describe('AboutusPageModule', () => {
  let aboutusModule: AboutusPageModule;

  beforeEach(() => {
    aboutusModule = new AboutusPageModule();
  });

  it('should create an instance', () => {
    expect(aboutusModule).toBeTruthy();
  });
});
