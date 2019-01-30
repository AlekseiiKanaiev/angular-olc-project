import { Component, OnInit, OnDestroy, Input, ElementRef, Renderer2 } from '@angular/core';
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
  private photos: string[];

  private galleryOptions: NgxGalleryOptions[];
  private galleryImages: NgxGalleryImage[] = [];

  private show = false;
  private subs: Subscription;

  constructor(private loaderServ: LoaderService, private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.getServices();
    this.filterServices(this.orendaType);
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
      this.photos = this.services.filter(el => el.type === type)
                                      .map(el => el['img_name']);
    }
    this.setGallery(type);
  }

  private setGallery (type: string) {
    if (this.photos) {
      this.galleryOptions = [
        {
          width: '100%',
          height: '600px',
          thumbnailsColumns: (this.photos.length <= 5) ? this.photos.length : 5,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageInfinityMove: true,
          imageSwipe: true,
          imagePercent: 85,
          imageArrows: false,
          thumbnailsSwipe: true,
          thumbnailsPercent: 15,
          thumbnailSize: NgxGalleryImageSize.Cover,
          // thumbnailsMargin: -95,
          thumbnailsArrows: false,
          preview: false
        }
      ];
      for (const photo of this.photos) {
        this.galleryImages.push(
          {
            small: `assets/img/gallery/${type}/${photo}`,
            medium: `assets/img/gallery/${type}/${photo}`,
            big: `assets/img/gallery/${type}/${photo}`
          });
      }
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
