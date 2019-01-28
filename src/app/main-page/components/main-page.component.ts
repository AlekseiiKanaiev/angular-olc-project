import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { CheckDEviceService } from 'src/app/_services/checkDevice.service';
import { Video } from 'src/app/_models/video.model';
import { User } from 'src/app/_models/user.model';
import store from '../../_store/store';

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
    private users: User[];

    constructor (private langServ: LangSevice,
                private chdev: CheckDEviceService) {}

    ngOnInit() {
        console.log('init main page');
        this.getLang();
        this.getVideo();
        this.getUsers();
        this.isNotMob = (!this.chdev.checkDeviceMobile() && !this.chdev.checkDeviceTablet());
        this.popVideo();
    }

    private getLang() {
        this.langServ.obsLang.subscribe(
          () => {
            this.lang = this.langServ.obsLang.getValue();
            this.isUkr = (this.lang === 'ukr');
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

    private getUsers() {
        this.users = store.getState().users;
        store.subscribe(
            () => {
                this.users = store.getState().users;
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
