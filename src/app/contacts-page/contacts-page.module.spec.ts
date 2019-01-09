import { ContactsPageModule } from './contacts-page.module';

describe('ContactsPageModule', () => {
  let contactsModule: ContactsPageModule;

  beforeEach(() => {
    contactsModule = new ContactsPageModule();
  });

  it('should create an instance', () => {
    expect(contactsModule).toBeTruthy();
  });
});
