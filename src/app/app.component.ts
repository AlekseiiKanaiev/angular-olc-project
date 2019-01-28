import { Component, OnInit, HostListener } from '@angular/core';
import { GetDataService } from './_services/getData.service';
import { LoaderService } from './_services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private isScroll = false;
  private isPreload = false;

  subs: Subscription;

  constructor(private dataServ: GetDataService, private loaderServ: LoaderService) {}

  ngOnInit() {
    this.dataServ.setMainUser();
    this.dataServ.setUsers();
    this.dataServ.setVideos();
    this.dataServ.setServices();
    window.onload = () => this.loaderServ.hide();
  }

  @HostListener('window:scroll')
  // В случае скрола выполняем функцию
  onWindowScroll() {
    // Сравниваем текущее положение экрана и полную высоту экрана / 6
    (window.pageYOffset > window.screen.width / 6) ?
      this.isScroll = true :
      this.isScroll = false;
  }
}
