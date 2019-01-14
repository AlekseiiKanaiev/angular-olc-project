import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiser',
  templateUrl: './tiser.component.html',
  styleUrls: ['./tiser.component.css']
})
export class TiserComponent implements OnInit {
  @Input() private isUkr: boolean;

  constructor() { }

  ngOnInit() {
  }

}
