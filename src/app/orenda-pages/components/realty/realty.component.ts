import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';

@Component({
  selector: 'app-realty',
  templateUrl: './realty.component.html',
  styleUrls: ['./realty.component.css']
})
export class RealtyComponent implements OnInit {
  private lang = 'ukr';
  private isUkr = true;
  private orendaType = 'photo-realty';

  constructor(private langServ: LangSevice) { }

  ngOnInit() {
    this.getLang();
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.obsLang.getValue();
        this.isUkr = (this.lang === 'ukr');
      }
    );
  }
}
