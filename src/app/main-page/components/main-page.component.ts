import { Component, Input, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';

@Component({
    selector: 'app-main-page-comp',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    lang = '2';

    constructor (private langServ: LangSevice) {}

    ngOnInit() {
        this.langServ.obsLang.subscribe(
          () => this.lang = this.langServ.getLang()
        );
    }
}
