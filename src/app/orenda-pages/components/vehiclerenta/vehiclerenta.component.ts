import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { Service } from 'src/app/_models/service.model';
import store from 'src/app/_store/store';

@Component({
  selector: 'app-vehiclerenta',
  templateUrl: './vehiclerenta.component.html',
  styleUrls: ['./vehiclerenta.component.css']
})
export class VehiclerentaComponent implements OnInit {
  private lang = 'ukr';
  private isUkr = true;
  private services: Service[];
  private vehiclePhoto: string[];

  constructor(private langServ: LangSevice) { }

  ngOnInit() {
    this.getLang();
    this.getServices();
    // this.filterServices();
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.obsLang.getValue();
        this.isUkr = (this.lang === 'ukr');
      }
    );
  }

  private getServices() {
    this.services = store.getState().services;
    store.subscribe(
      () => {
        this.services = store.getState().services;
        this.filterServices();
      }
    );
  }

  private filterServices() {
    if (this.services) {
      this.vehiclePhoto = this.services.filter(el => el.type === 'photo-transport')
                                      .map(el => el['img_name']);
    }
  }

}
