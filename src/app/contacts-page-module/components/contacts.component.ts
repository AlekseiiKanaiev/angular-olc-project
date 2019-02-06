import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/_models/user.model';
import { GetDataService } from 'src/app/_services/getData.service';
import store from 'src/app/_store/store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private lang: string;
  private isUkr: boolean;
  private mobileIcon = faMobileAlt;
  private user: User;

  constructor(private langServ: LangSevice) { }

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
    this.user = store.getState().mainUser;
    store.subscribe(
      () => {
        this.user = store.getState().mainUser;
      }
    );
  }
}
