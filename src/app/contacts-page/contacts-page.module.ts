import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsPageRouterModule } from './contacts-page.router.module';
import { ContactsComponent } from './components/contacts.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsPageRouterModule
  ],
  declarations: [
    ContactsComponent
  ]
})
export class ContactsPageModule { }
