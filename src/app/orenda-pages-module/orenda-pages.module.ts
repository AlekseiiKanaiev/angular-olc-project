import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery';
import { OrendaPagesRouterModule, orendaPagesRoutingComponents } from './orenda-pages.router.module';
import { OrendaButtonComponent } from './components/orenda-button/orenda-button.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import 'hammerjs';


@NgModule({
  imports: [
    CommonModule,
    OrendaPagesRouterModule,
    NgxGalleryModule
  ],
  declarations: [
    orendaPagesRoutingComponents,
    OrendaButtonComponent,
    PhotoGalleryComponent
  ]
})
export class OrendaPagesModule { }
