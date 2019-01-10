import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageRouterModule } from './main-page.router.module';

import { MainPageComponent } from './components/main-page.component';
import { TiserComponent } from './components/tiser/tiser.component';

@NgModule({
  imports: [
    CommonModule,
    MainPageRouterModule
  ],
  declarations: [
    MainPageComponent,
    TiserComponent
  ]
})
export class MainPageModule { }
