import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrendaPagesRouterModule, orendaPagesRoutingComponents } from './orenda-pages.router.module';

@NgModule({
  imports: [
    CommonModule,
    OrendaPagesRouterModule
  ],
  declarations: [
    orendaPagesRoutingComponents
  ]
})
export class OrendaPagesModule { }
