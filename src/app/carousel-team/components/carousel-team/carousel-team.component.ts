import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { LangSevice } from 'src/app/_services/lang.service';
import store from 'src/app/_store/store';

@Component({
  selector: 'app-carousel-team',
  templateUrl: './carousel-team.component.html',
  styleUrls: ['./carousel-team.component.css']
})
export class CarouselTeamComponent implements OnInit {
  // private lang = 'ukr';
  @Input() private isUkr = true;

  private users: User[];

  private userIcon = faUser;
  private angleLeft = faAngleLeft;
  private angleRight = faAngleRight;

  private myCarouselOptions = {
    items: 3,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 700,
    // navText: [
    //   `<fa-icon [icon]= "${faAngleLeft}"></fa-icon>`,
    //   `<fa-icon [icon]= "${faAngleRight}"></fa-icon>`
    // ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        738: {
            items: 2,
            nav: true
        }
    }
  };

  constructor(private langServ: LangSevice) {}

  ngOnInit() {
    // this.getLang();
    this.getUsers();
  }

  // private getLang() {
  //   this.langServ.obsLang.subscribe(
  //     () => {
  //       this.lang = this.langServ.obsLang.getValue();
  //       this.isUkr = (this.lang === 'ukr');
  //     }
  //   );
  // }

  private getUsers() {
    this.users = store.getState().users;
    store.subscribe(
        () => {
            this.users = store.getState().users;
        }
    );
}

}
