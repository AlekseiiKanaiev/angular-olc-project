import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { CheckDEviceService } from 'src/app/_services/checkDevice.service';
import { Video } from 'src/app/_models/video.model';
import store from '../../_store/store';
import { TitleSerice } from 'src/app/_services/titleService.service';

@Component({
    selector: 'app-main-page-comp',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    private lang = 'ukr';
    private isUkr = true;
    private isNotMob = false;
    private videos: Video[];
    private lastVideo: Video;
    private isVideo = false;

    constructor (private langServ: LangSevice,
                private chdev: CheckDEviceService,
                private titleServ: TitleSerice) {}

    ngOnInit() {
        this.getLang();
        this.getVideo();
        this.isNotMob = (!this.chdev.checkDeviceMobile() && !this.chdev.checkDeviceTablet());
        this.popVideo();
    }

    private getLang() {
        this.langServ.obsLang.subscribe(
          () => {
            this.lang = this.langServ.obsLang.getValue();
            this.isUkr = (this.lang === 'ukr');
            const name = (this.isUkr) ? 'Головна' : 'Главная';
            this.titleServ.setTitle(name);
          }
        );
    }

    private getVideo() {
        this.videos = store.getState().videos;
        store.subscribe(
            () => {
                this.videos = store.getState().videos;
                this.popVideo();
            }
        );
    }

    private popVideo() {
        if (this.videos) {
            this.isVideo = true;
            this.lastVideo = this.videos.slice().pop();
        }
    }
}
