import { Component, OnInit, ElementRef } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isUkr = true;
  private lang = 'ukr';
  private mainUser: User;

  constructor(private langServ: LangSevice, private getDateServ: GetDataService) { }

  ngOnInit() {
    this.getLang();
    this.getMainUser();
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.getLang();
        this.isUkr = (this.lang === 'ukr');
      }
    );
  }

  private getMainUser() {
    this.getDateServ.obsMainUser.subscribe(
      (data) => {
        this.mainUser = data;
      }
    );
  }

  private switchLang(lang: string) {
    if (this.lang !== lang) {
      this.langServ.setLang(lang);
    }
  }
}
