import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize, NgxGalleryOrder } from 'ngx-gallery';
import { LangSevice } from 'src/app/_services/lang.service';
import { Service } from 'src/app/_models/service.model';
import store from 'src/app/_store/store';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/_services/loader.service';

@Component({
  selector: 'app-vehiclerenta',
  templateUrl: './vehiclerenta.component.html',
  styleUrls: ['./vehiclerenta.component.css']
})
export class VehiclerentaComponent implements OnInit {
  private lang = 'ukr';
  private isUkr = true;
  private orendaType = 'photo-transport';

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
