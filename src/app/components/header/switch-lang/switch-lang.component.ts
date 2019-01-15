import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-switch-lang',
  templateUrl: './switch-lang.component.html',
  styleUrls: ['./switch-lang.component.css']
})
export class SwitchLangComponent implements OnInit {
  @Input() private isUkr: boolean;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() private onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  private switchLang(lang: string) {
    this.onClick.emit(lang);
  }
}
