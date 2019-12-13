import { Component, OnInit, ElementRef } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { User } from 'src/app/_models/user.model';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUkr = true;
  lang = 'ukr';
  mainUser: User;
  mobileIcon = faMobileAlt;

  constructor(private langServ: LangSevice, private getDataServ: GetDataService) { }

  ngOnInit() {
    this.getLang();
    this.getMainUser();
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
