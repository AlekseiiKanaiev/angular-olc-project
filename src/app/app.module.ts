import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRouterModule } from './app.router.module';
import { MainPageModule } from './main-page/main-page.module';
import { SlideDirective } from './directives/slide.directive';
import { VideoPagesModule } from './video-pages/video-pages.module';
import { OrendaPagesModule } from './orenda-pages/orenda-pages.module';
import { AboutusPageModule } from './aboutus-page/aboutus-page.module';
import { ContactsPageModule } from './contacts-page/contacts-page.module';
import { GetQueryParamsService } from './services/get-query-params.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideDirective
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    MainPageModule,
    VideoPagesModule,
    OrendaPagesModule,
    AboutusPageModule,
    ContactsPageModule,
  ],
  providers: [
    GetQueryParamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
