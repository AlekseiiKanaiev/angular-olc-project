import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRouterModule } from './main-page.router.module';

import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    MainPageRouterModule
  ],
  declarations: [
    MainPageComponent
  ]
})
export class MainPageModule { }
