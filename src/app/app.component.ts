import { Component, OnInit, HostListener } from '@angular/core';
import { GetDataService } from './_services/getData.service';
import { LoaderService } from './_services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../media.css']
})
export class AppComponent implements OnInit {
  isScroll = false;
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
    // Сравниваем прокрученный экран и высоту экрана
    (window.scrollY > window.innerHeight) ?
      this.isScroll = true :
      this.isScroll = false;
  }
}
