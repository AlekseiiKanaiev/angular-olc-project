import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrendaPagesRouterModule, orendaPagesRoutingComponents } from './orenda-pages.router.module';
import { OrendaButtonComponent } from './components/orenda-button/orenda-button.component';

@NgModule({
  imports: [
    CommonModule,
    OrendaPagesRouterModule
  ],
  declarations: [
    orendaPagesRoutingComponents,
    OrendaButtonComponent
  ]
})
export class OrendaPagesModule { }
