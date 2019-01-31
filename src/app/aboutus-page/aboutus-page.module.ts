import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselTeamModule } from '../carousel-team/carousel-team.module';

import { AboutusPageRouterModule } from './aboutus-page.router.module';
import { AboutusComponent } from './components/aboutus.component';

@NgModule({
  imports: [
    CommonModule,
    AboutusPageRouterModule,
    CarouselTeamModule
  ],
  declarations: [
    AboutusComponent,
  ]
})
export class AboutusPageModule { }
