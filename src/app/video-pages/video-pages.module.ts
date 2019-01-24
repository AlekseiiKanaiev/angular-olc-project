import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap';
import { VideoPagesRouterModule, videoPagesRoutingComponents } from './video-pages.router.module';
import { OblVideoItemComponent } from './components/oblvideo/video-list/video-item/oblvideo-item.component';
import { OblVideoListComponent } from './components/oblvideo/video-list/oblvideo-list.component';
import { PrivateVideoListComponent } from './components/privatvideo/video-list/privatevideo-list.component';
import { PrivateVideoItemComponent } from './components/privatvideo/video-list/video-item/privatevideo-item.component';

@NgModule({
  imports: [
    CommonModule,
    VideoPagesRouterModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    videoPagesRoutingComponents,
    OblVideoListComponent,
    OblVideoItemComponent,
    PrivateVideoListComponent,
    PrivateVideoItemComponent
  ],
  exports: [
    // PaginationModule
  ]
})
export class VideoPagesModule { }
