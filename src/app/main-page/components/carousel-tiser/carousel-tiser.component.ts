import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-tiser',
  templateUrl: './carousel-tiser.component.html',
  styleUrls: ['./carousel-tiser.component.css']
})
export class CarouselTiserComponent implements OnInit {
  @Input() isUkr: boolean;

  constructor() { }

  ngOnInit() {
  }

}
