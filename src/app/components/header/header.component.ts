import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isUkr = false;
  private lang = 'ukr';
  mainUser: User;

  constructor(private langServ: LangSevice, private getDateServ: GetDataService) { }

  ngOnInit() {
    console.log(this.mainUser);
    this.getLang();
    this.getMainUser();
  }

  private onClick(lang) {
    if (this.lang !== lang) {
      this.langServ.setLang(lang);
    }
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.getLang();
        this.isUkr = !this.isUkr;
      }
    );
  }

  private getMainUser() {
    this.getDateServ.getMainUser().subscribe(
      (user) => {
        this.mainUser = user;
      }
    );
  }
}
