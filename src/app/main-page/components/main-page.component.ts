import { Component, Input, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { CheckDEviceService } from 'src/app/_services/checkDevice.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { Video } from 'src/app/_models/video.model';

@Component({
    selector: 'app-main-page-comp',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
    private lang = 'ukr';
    private isUkr = true;
    private isNotMob = false;
    private lastVideo: Video;
    private isVideo = false;

    constructor (private langServ: LangSevice,
                private chdev: CheckDEviceService,
                private dataServ: GetDataService) {}

    ngOnInit() {
        this.getLang();
        this.getVideo();
        this.isNotMob = (!this.chdev.checkDeviceMobile() && !this.chdev.checkDeviceTablet());
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
        this.dataServ.obsVideos.subscribe(
            (videos) => {
                this.lastVideo = videos.pop();
                if (this.lastVideo.video_id) { this.isVideo = true; }
            }
        );
    }
}
