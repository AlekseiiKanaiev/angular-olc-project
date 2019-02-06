import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap';
import { VideoPagesRouterModule, videoPagesRoutingComponents } from './video-pages.router.module';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoItemComponent } from './components/video-list/video-item/video-item.component';

@NgModule({
  imports: [
    CommonModule,
    VideoPagesRouterModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    videoPagesRoutingComponents,
    // OblVideoListComponent,
    // OblVideoItemComponent,
    // PrivateVideoListComponent,
    // PrivateVideoItemComponent,
    VideoListComponent,
    VideoItemComponent
  ],
  exports: [
    // PaginationModule
  ]
})
export class VideoPagesModule { }
