import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPagesRouterModule, videoPagesRoutingComponents } from './video-pages.router.module';

@NgModule({
  imports: [
    CommonModule,
    VideoPagesRouterModule
  ],
  declarations: [
    videoPagesRoutingComponents
  ]
})
export class VideoPagesModule { }
