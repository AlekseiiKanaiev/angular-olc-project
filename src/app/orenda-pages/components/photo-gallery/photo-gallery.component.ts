import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/_services/loader.service';
import store from 'src/app/_store/store';
import { Service } from 'src/app/_models/service.model';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit, OnDestroy {
  @Input() private orendaType: string;

  private services: Service[];
  private vehiclePhoto: string[];

  private galleryOptions: NgxGalleryOptions[];
  private galleryImages: NgxGalleryImage[] = [];

  private show = false;
  private subs: Subscription;

  constructor(private loaderServ: LoaderService) { }

  ngOnInit() {
    this.getServices();
    this.filterServices(this.orendaType);
    this.galleryOptions = [
      {
        width: '100%',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageInfinityMove: true,
        imageSwipe: true,
        imagePercent: 75,
        thumbnailsSwipe: true,
        thumbnailsPercent: 20,
        thumbnailSize: NgxGalleryImageSize.Contain,
        preview: false
      }
    ];
    this.subs = this.loaderServ.loaderState.subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      (state: boolean) => {
        this.show = !state;
      }
    );
  }

  private getServices() {
    this.services = store.getState().services;
    store.subscribe(
      () => {
        this.services = store.getState().services;
        this.filterServices(this.orendaType);
      }
    );
  }

  private filterServices(type: string) {
    if (this.services) {
      this.vehiclePhoto = this.services.filter(el => el.type === type)
                                      .map(el => el['img_name']);
    }
    this.setGalleryImages();
  }

  private setGalleryImages() {
    if (this.vehiclePhoto) {
      // tslint:disable-next-line:forin
      for (const image of this.vehiclePhoto) {
        this.galleryImages.push(
          {
            small: `assets/img/gallery/transport/${image}`,
            medium: `assets/img/gallery/transport/${image}`,
            big: `assets/img/gallery/transport/${image}`
          });
      }
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
