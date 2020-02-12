import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRouterModule } from './main-page.router.module';

import { CarouselTeamModule } from '../carousel-team-module/carousel-team.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MainPageComponent } from './components/main-page.component';
import { VideoTiserComponent } from './components/video-tiser/video-tiser.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { CarouselTiserComponent } from './components/carousel-tiser/carousel-tiser.component';
import { CheckDEviceService } from '../_services/checkDevice.service';
import { LastVideoComponent } from './components/last-video/last-video.component';


@NgModule({
  imports: [
    CommonModule,
    MainPageRouterModule,
    // OwlModule,
    FontAwesomeModule,
    CarouselTeamModule
  ],
  declarations: [
    MainPageComponent,
    VideoTiserComponent,
    CarouselTiserComponent,
    AdvantagesComponent,
    LastVideoComponent,
  ],
  providers: [CheckDEviceService]
})
export class MainPageModule { }
