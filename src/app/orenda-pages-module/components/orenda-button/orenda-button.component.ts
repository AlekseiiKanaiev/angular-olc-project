import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-orenda-button',
  templateUrl: './orenda-button.component.html',
  styleUrls: ['./orenda-button.component.css']
})
export class OrendaButtonComponent implements OnInit {
  @Input() private isUkr: boolean;

  constructor() { }

  ngOnInit() {
  }

}
