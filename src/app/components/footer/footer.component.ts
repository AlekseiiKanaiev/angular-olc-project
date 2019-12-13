import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { User } from 'src/app/_models/user.model';
import { faMobileAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isUkr = true;
  private lang = 'ukr';
  mainUser: User;
  mobileIcon = faMobileAlt;
  locationIcon = faLocationArrow;

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
}
