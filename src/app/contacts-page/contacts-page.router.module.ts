import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts.component';

const contactsRoutes: Routes = [
    {path: 'contacts', component: ContactsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(contactsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContactsPageRouterModule {}
