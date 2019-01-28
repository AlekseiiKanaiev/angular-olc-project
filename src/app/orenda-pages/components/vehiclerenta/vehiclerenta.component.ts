import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';

@Component({
  selector: 'app-vehiclerenta',
  templateUrl: './vehiclerenta.component.html',
  styleUrls: ['./vehiclerenta.component.css']
})
export class VehiclerentaComponent implements OnInit {
  private lang = 'ukr';
  private isUkr = true;

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
