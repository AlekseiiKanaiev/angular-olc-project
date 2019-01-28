import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRouterModule } from './main-page.router.module';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainPageComponent } from './components/main-page.component';
import { VideoTiserComponent } from './components/video-tiser/video-tiser.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { CarouselTiserComponent } from './components/carousel-tiser/carousel-tiser.component';
import { CheckDEviceService } from '../_services/checkDevice.service';
import { LastVideoComponent } from './components/last-video/last-video.component';
import { CarouselTeamComponent } from './components/carousel-team/carousel-team.component';

@NgModule({
  imports: [
    CommonModule,
    MainPageRouterModule,
    OwlModule,
    FontAwesomeModule
  ],
  declarations: [
    MainPageComponent,
    VideoTiserComponent,
    CarouselTiserComponent,
    AdvantagesComponent,
    LastVideoComponent,
    CarouselTeamComponent
  ],
  providers: [CheckDEviceService]
})
export class MainPageModule { }
