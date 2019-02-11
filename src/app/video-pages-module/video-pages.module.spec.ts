import { VideoPagesModule } from './video-pages.module';

describe('VideoPagesModule', () => {
  let videoPagesModule: VideoPagesModule;

  beforeEach(() => {
    videoPagesModule = new VideoPagesModule();
  });

  it('should create an instance', () => {
    expect(videoPagesModule).toBeTruthy();
  });
});
