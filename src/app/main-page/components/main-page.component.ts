import { Component, Input, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';

@Component({
    selector: 'app-main-page-comp',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    lang = 'ukr';
    isUkr = false;

    constructor (private langServ: LangSevice) {}

    ngOnInit() {
        this.getLang();
    }

    private getLang() {
        this.langServ.obsLang.subscribe(
          () => {
            this.lang = this.langServ.getLang();
            this.isUkr = !this.isUkr;
          }
        );
      }
}
