import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/_models/user.model';
import { GetDataService } from 'src/app/_services/getData.service';
import store from 'src/app/_store/store';
import { TitleSerice } from 'src/app/_services/titleService.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  lang: string;
  isUkr: boolean;
  mobileIcon = faMobileAlt;
  user: User;

  constructor(private langServ: LangSevice, private titleServ: TitleSerice) { }

  ngOnInit() {
    this.getLang();
    this.getMainUser();
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.obsLang.getValue();
        this.isUkr = (this.lang === 'ukr');
        const name = (this.isUkr) ? 'Контакти' : 'Контакты';
        this.titleServ.setTitle(name);
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
