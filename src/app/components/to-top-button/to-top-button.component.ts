import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.css']
})
export class ToTopButtonComponent implements OnInit {
  private isUkr = true;
  private lang = 'ukr';
  private toTopIcon = faAngleDoubleUp;

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

  private toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
