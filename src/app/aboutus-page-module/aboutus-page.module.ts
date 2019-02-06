import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselTeamModule } from '../carousel-team-module/carousel-team.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap';

import { AboutusPageRouterModule } from './aboutus-page.router.module';

import { AboutusComponent } from './components/aboutus.component';
import { PubInfoComponent } from './components/pub-info/pub-info.component';
import { PubInfoListComponent } from './components/pub-info/pub-info-list/pub-info-list.component';

@NgModule({
  imports: [
    CommonModule,
    AboutusPageRouterModule,
    CarouselTeamModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AboutusComponent,
    PubInfoComponent,
    PubInfoListComponent
  ]
})
export class AboutusPageModule { }
