import { Component, OnInit, Input } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel-tiser',
  templateUrl: './carousel-tiser.component.html',
  styleUrls: ['./carousel-tiser.component.css']
})
export class CarouselTiserComponent implements OnInit {
  @Input() isUkr: boolean;

  angleRightIcon = faAngleRight;
  angleLeftIcon = faAngleLeft;


  constructor() { }

  ngOnInit() {
  }

}
