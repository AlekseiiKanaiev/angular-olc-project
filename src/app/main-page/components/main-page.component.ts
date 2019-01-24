import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { CheckDEviceService } from 'src/app/_services/checkDevice.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { Video } from 'src/app/_models/video.model';
import { User } from 'src/app/_models/user.model';
import { Subscription } from 'rxjs';
import store from '../../_store/store';

@Component({
    selector: 'app-main-page-comp',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit, OnDestroy {
    private lang = 'ukr';
    private isUkr = true;
    private isNotMob = false;
    private lastVideo: Video;
    private isVideo = false;
    private users: User[];

    constructor (private langServ: LangSevice,
                private chdev: CheckDEviceService,
                private dataServ: GetDataService) {}

    ngOnInit() {
        console.log('init main page');
        this.lastVideo = store.getState().videos.slice().pop();
        this.users = store.getState().users;
        this.getLang();
        this.getVideo();
        this.getUsers();
        this.isNotMob = (!this.chdev.checkDeviceMobile() && !this.chdev.checkDeviceTablet());
        if (this.lastVideo.video_id) { this.isVideo = true; }
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
        store.subscribe(
            () => {
                this.lastVideo = store.getState().videos.slice().pop();
                if (this.lastVideo.video_id) { this.isVideo = true; }
            }
        );
    }

    private getUsers() {
        store.subscribe(
            () => {
                this.users = store.getState().users;
            }
        );
    }

    ngOnDestroy() {
    }
}
