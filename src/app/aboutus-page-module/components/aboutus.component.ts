import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import store from 'src/app/_store/store';
import { User } from 'src/app/_models/user.model';
import { TitleSerice } from 'src/app/_services/titleService.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  private lang = 'ukr';
  isUkr = true;
  private users: User[];

  constructor(private langServ: LangSevice, private titleServ: TitleSerice) { }

  ngOnInit() {
    this.getLang();
    this.getUsers();
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.obsLang.getValue();
        this.isUkr = (this.lang === 'ukr');
        const name = (this.isUkr) ? 'Про нас' : 'О нас';
        this.titleServ.setTitle(name);
      }
    );
  }

  private getUsers() {
    this.users = store.getState().users;
    store.subscribe(
        () => {
            this.users = store.getState().users;
        }
    );
  }
}
