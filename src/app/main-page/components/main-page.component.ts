import { Component, Input, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { CheckDEviceService } from 'src/app/_services/checkDevice.service';

@Component({
    selector: 'app-main-page-comp',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    private lang = 'ukr';
    private isUkr = true;
    private isNotMob = false;

    constructor (private langServ: LangSevice, private chdev: CheckDEviceService) {}

    ngOnInit() {
        this.getLang();
        this.isNotMob = (!this.chdev.checkDeviceMobile() && !this.chdev.checkDeviceTablet());
    }

    private getLang() {
        this.langServ.obsLang.subscribe(
          () => {
            this.lang = this.langServ.getLang();
            this.isUkr = (this.lang === 'ukr');
          }
        );
    }
}
