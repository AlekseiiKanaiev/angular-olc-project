import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRouterModule } from './app.router.module';
import { MainPageModule } from './main-page/main-page.module';
import { SlideDirective } from './_directives/slide.directive';
import { VideoPagesModule } from './video-pages/video-pages.module';
import { OrendaPagesModule } from './orenda-pages/orenda-pages.module';
import { AboutusPageModule } from './aboutus-page/aboutus-page.module';
import { ContactsPageModule } from './contacts-page/contacts-page.module';
import { LangSevice } from './_services/lang.service';
import { GetDataService } from './_services/getData.service';
import { SwitchLangComponent } from './components/header/switch-lang/switch-lang.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchLangComponent,
    SlideDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    MainPageModule,
    VideoPagesModule,
    OrendaPagesModule,
    AboutusPageModule,
    ContactsPageModule,
  ],
  providers: [
    LangSevice,
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
