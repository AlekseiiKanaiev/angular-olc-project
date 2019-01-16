import { Component, OnInit, HostListener } from '@angular/core';
import { GetDataService } from './_services/getData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isScroll = false;

  constructor(private dataserv: GetDataService) {}

  ngOnInit() {
    this.dataserv.setMainUser();
    this.dataserv.setUsers();
    this.dataserv.setVideos();
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
