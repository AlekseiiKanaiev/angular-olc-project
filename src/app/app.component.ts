import { Component, OnInit } from '@angular/core';
import { GetDataService } from './_services/getData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataserv: GetDataService) {}

  ngOnInit() {
    this.dataserv.setMainUser();
    // this.dataserv.setUsers();
    this.dataserv.setVideos();
  }
}
