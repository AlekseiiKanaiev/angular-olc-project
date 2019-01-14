import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRouterModule } from './main-page.router.module';

import { MainPageComponent } from './components/main-page.component';
import { TiserComponent } from './components/tiser/tiser.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { CarouselTiserComponent } from './components/carousel-tiser/carousel-tiser.component';
import { CheckDEviceService } from '../_services/checkDevice.service';

@NgModule({
  imports: [
    CommonModule,
    MainPageRouterModule
  ],
  declarations: [
    MainPageComponent,
    TiserComponent,
    CarouselTiserComponent,
    AdvantagesComponent
  ],
  providers: [CheckDEviceService]
})
export class MainPageModule { }
