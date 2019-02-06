import { OrendaPagesModule } from './orenda-pages.module';

describe('OrendaPagesModule', () => {
  let realtyPagesModule: OrendaPagesModule;

  beforeEach(() => {
    realtyPagesModule = new OrendaPagesModule();
  });

  it('should create an instance', () => {
    expect(realtyPagesModule).toBeTruthy();
  });
});
