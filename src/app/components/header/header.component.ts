import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { GetQueryParamsService } from 'src/app/services/get-query-params.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUkr = true;
  lang = 'ukr';

  constructor(private element: ElementRef, private gqp: GetQueryParamsService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(1);
    this.activeRoute.queryParams.subscribe(
      (params) => {
        if (params['lang']) {
          if (params['lang'] !== this.lang) {
            this.isUkr = !this.isUkr;
          }
          this.lang = params['lang'];
        }
      }
    );
  }

  onClick(lang) {
    if (this.lang !== lang) {
      this.isUkr = !this.isUkr;
      this.lang = lang;
    }
  }
}
