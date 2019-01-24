import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import store from 'src/app/_store/store';
import { LangSevice } from 'src/app/_services/lang.service';

@Component({
  selector: 'app-privatvideo',
  templateUrl: './privatvideo.component.html',
  styleUrls: ['./privatvideo.component.css']
})
export class PrivatvideoComponent implements OnInit {
  private videos: Video[];
  private isVideo = false;
  private isUkr = true;
  private lang = 'ukr';

  constructor(private langServ: LangSevice) { }

  ngOnInit() {
    this.videos = store.getState().videos;
    this.getLang();
    this.getVideo();
    if (this.videos) { this.isVideo = true; }
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
        this.videos = store.getState().videos;
        if (this.videos) { this.isVideo = true; }
      }
    );
  }

}
