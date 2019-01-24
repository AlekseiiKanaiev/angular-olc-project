import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap';
import { VideoPagesRouterModule, videoPagesRoutingComponents } from './video-pages.router.module';
import { VideoItemComponent } from './components/oblvideo/video-list/video-item/video-item.component';
import { VideoListComponent } from './components/oblvideo/video-list/video-list.component';

@NgModule({
  imports: [
    CommonModule,
    VideoPagesRouterModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    videoPagesRoutingComponents,
    VideoListComponent,
    VideoItemComponent
  ],
  exports: [
    // PaginationModule
  ]
})
export class VideoPagesModule { }
