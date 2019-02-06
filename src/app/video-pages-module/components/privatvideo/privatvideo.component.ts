import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import store from 'src/app/_store/store';
import { LangSevice } from 'src/app/_services/lang.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privatvideo',
  templateUrl: './privatvideo.component.html',
  styleUrls: ['./privatvideo.component.css']
})
export class PrivatvideoComponent implements OnInit, OnDestroy {
  private videos: Video[];
  private isVideo = false;
  private isUkr = true;
  private lang = 'ukr';

  constructor(private langServ: LangSevice, private router: Router) { }

  ngOnInit() {
    this.getLang();
    this.getVideo();
    this.filterVideo();
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
        this.filterVideo();
      }
    );
  }

  private filterVideo() {
    if (this.videos) {
      this.videos = this.videos.filter(el => el.tag === 'privatvideo');
      this.isVideo = true;
    }
  }
  ngOnDestroy() {
  }
}
