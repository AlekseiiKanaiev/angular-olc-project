import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselTeamComponent } from './components/carousel-team/carousel-team.component';

@NgModule({
  imports: [
    CommonModule,
    OwlModule,
    FontAwesomeModule
  ],
  declarations: [
    CarouselTeamComponent
  ],
  exports: [
    CarouselTeamComponent
  ]
})
export class CarouselTeamModule { }
