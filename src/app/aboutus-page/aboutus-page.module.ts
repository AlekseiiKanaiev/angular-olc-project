import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusPageRouterModule } from './aboutus-page.router.module';
import { AboutusComponent } from './components/aboutus.component';

@NgModule({
  imports: [
    CommonModule,
    AboutusPageRouterModule
  ],
  declarations: [
    AboutusComponent
  ]
})
export class AboutusPageModule { }
