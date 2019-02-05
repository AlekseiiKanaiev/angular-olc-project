import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsPageRouterModule } from './contacts-page.router.module';

import { ContactsComponent } from './components/contacts.component';
import { SendEmailFormComponent } from './components/send-email-form/send-email-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContactsPageRouterModule,
    FontAwesomeModule,
    AlertModule.forRoot()
  ],
  declarations: [
    ContactsComponent,
    SendEmailFormComponent
  ]
})
export class ContactsPageModule { }
