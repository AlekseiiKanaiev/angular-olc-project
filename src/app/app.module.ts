import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { PaginationModule } from 'ngx-bootstrap';

import { AppRouterModule } from './app.router.module';
import { MainPageModule } from './main-page-module/main-page.module';
import { VideoPagesModule } from './video-pages-module/video-pages.module';
import { OrendaPagesModule } from './orenda-pages-module/orenda-pages.module';
import { AboutusPageModule } from './aboutus-page-module/aboutus-page.module';
import { ContactsPageModule } from './contacts-page-module/contacts-page.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SwitchLangComponent } from './components/header/switch-lang/switch-lang.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

import { SlideDirective } from './_directives/slide.directive';

import { LangSevice } from './_services/lang.service';
import { GetDataService } from './_services/getData.service';
import { LoaderService } from './_services/loader.service';
// import { LoaderInterceptorService } from './_services/loaderInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchLangComponent,
    SlideDirective,
    FooterComponent,
    ToTopButtonComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    FontAwesomeModule,
    // PaginationModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRouterModule,
    MainPageModule,
    VideoPagesModule,
    OrendaPagesModule,
    AboutusPageModule,
    ContactsPageModule,
  ],
  providers: [
    LangSevice,
    GetDataService,
    LoaderService,
    // {provide: LoaderInterceptorService,
    // useClass: HTTP_INTERCEPTORS,
    // multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
