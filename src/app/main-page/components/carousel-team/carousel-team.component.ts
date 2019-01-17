import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-carousel-team',
  templateUrl: './carousel-team.component.html',
  styleUrls: ['./carousel-team.component.css']
})
export class CarouselTeamComponent implements OnInit {
  @Input() private isUkr: boolean;

  @Input() private users: User[];

  // private myCarouselImgs: string[];
  private myCarouselOptions = {
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 700,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>'
    ],
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

  constructor() {}

  ngOnInit() {
    // this.myCarouselImgs = this.users.map(e => e['img_name']);
  }
}
