import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent implements OnInit {
  @Input() isUkr: boolean;

  constructor() { }

  ngOnInit() {
  }

}
