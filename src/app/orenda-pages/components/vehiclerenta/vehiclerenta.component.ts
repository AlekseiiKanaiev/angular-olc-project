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

  // private services: Service[];
  // private vehiclePhoto: string[];

  // private galleryOptions: NgxGalleryOptions[];
  // private galleryImages: NgxGalleryImage[] = [];

  // private show = false;
  // private subs: Subscription;

  constructor(private langServ: LangSevice) { }

  ngOnInit() {
    this.getLang();
    // this.getServices();
    // this.filterServices();
    // this.galleryOptions = [
    //   {
    //     width: '100%',
    //     height: '600px',
    //     thumbnailsColumns: 4,
    //     imageAnimation: NgxGalleryAnimation.Slide,
    //     imageInfinityMove: true,
    //     imageSwipe: true,
    //     imagePercent: 75,
    //     thumbnailsSwipe: true,
    //     thumbnailsPercent: 20,
    //     thumbnailSize: NgxGalleryImageSize.Contain,
    //     preview: false
    //   }
    // ];
    // this.subs = this.loaderServ.loaderState.subscribe(
    //   // tslint:disable-next-line:no-shadowed-variable
    //   (state: boolean) => {
    //     this.show = !state;
    //   }
    // );
  }

  private getLang() {
    this.langServ.obsLang.subscribe(
      () => {
        this.lang = this.langServ.obsLang.getValue();
        this.isUkr = (this.lang === 'ukr');
      }
    );
  }

  // private getServices() {
  //   this.services = store.getState().services;
  //   store.subscribe(
  //     () => {
  //       this.services = store.getState().services;
  //       this.filterServices();
  //     }
  //   );
  // }

  // private filterServices() {
  //   if (this.services) {
  //     this.vehiclePhoto = this.services.filter(el => el.type === 'photo-transport')
  //                                     .map(el => el['img_name']);
  //   }
  //   this.setGalleryImages();
  // }

  // private setGalleryImages() {
  //   if (this.vehiclePhoto) {
  //     // tslint:disable-next-line:forin
  //     for (const image of this.vehiclePhoto) {
  //       this.galleryImages.push(
  //         {
  //           small: `assets/img/gallery/transport/${image}`,
  //           medium: `assets/img/gallery/transport/${image}`,
  //           big: `assets/img/gallery/transport/${image}`
  //         });
  //     }
  //     console.log(this.galleryImages);
  //   }
  // }

  // ngOnDestroy() {
  //   this.subs.unsubscribe();
  // }
}
