import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { LangSevice } from 'src/app/services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUkr = true;
  lang = 'ukr';

  constructor(private langServ: LangSevice) { }

  ngOnInit() {
    this.langServ.obsLang.subscribe(
      () => this.lang = this.langServ.getLang()
    );
  }

  onClick(lang) {
    if (this.lang !== lang) {
      this.isUkr = !this.isUkr;
      this.langServ.setLang(lang);
    }
  }
}
