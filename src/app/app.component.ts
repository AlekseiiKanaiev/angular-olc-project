import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lang = 'ukr';
  curUrl = '';

  constructor(private location: Location, private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('new');
    this.activeRoute.queryParams.subscribe(
      (params) => {
        console.log(params);
        if (params) {
          this.lang = params['lang'];
        }
      }
    );
  }
}
