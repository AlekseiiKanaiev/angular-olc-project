import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { TitleSerice } from 'src/app/_services/titleService.service';

@Component({
  selector: 'app-realty',
  templateUrl: './realty.component.html',
  styleUrls: ['./realty.component.css']
})
export class RealtyComponent implements OnInit {
  private lang = 'ukr';
  isUkr = true;
  orendaType = 'photo-realty';

  constructor(private langServ: LangSevice, private titleServ: TitleSerice) { }

  ngOnInit() {
    this.getLang();
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.obsLang.getValue();
        this.isUkr = (this.lang === 'ukr');
        const name = (this.isUkr) ? 'Оренда приміщень' : 'Аренда помещений';
        this.titleServ.setTitle(name);
      }
    );
  }
}
