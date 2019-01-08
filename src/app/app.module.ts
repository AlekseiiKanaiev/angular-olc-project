import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRouterModule } from './app.router.module';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
