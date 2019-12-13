import { Component, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { User } from 'src/app/_models/user.model';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { CheckDEviceService } from 'src/app/_services/checkDevice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  isUkr = true;
  lang = 'ukr';
  mainUser: User;
  mobileIcon = faMobileAlt;

  constructor(private langServ: LangSevice, private getDataServ: GetDataService, private chdev: CheckDEviceService) { }

  ngOnInit() {
    this.getLang();
    this.getMainUser();
  }
  ngAfterViewChecked() {
    (!this.chdev.checkDeviceMobile() && !this.chdev.checkDeviceTablet() && location.pathname === '/golovna') ?
    document.getElementById('my-header').style.position = 'absolute' :
    document.getElementById('my-header').style.position = 'relative';
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.obsLang.getValue();
        this.isUkr = (this.lang === 'ukr');
      }
    );
  }

  private getMainUser() {
    this.getDataServ.obsMainUser.subscribe(
      (data) => {
        this.mainUser = data;
      }
    );
  }

  switchLang(lang: string) {
    if (this.lang !== lang) {
      this.langServ.setLang(lang);
    }
  }
}
