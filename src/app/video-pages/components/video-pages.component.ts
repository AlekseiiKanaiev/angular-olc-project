import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from 'src/app/_models/video.model';
import { LangSevice } from 'src/app/_services/lang.service';
import { Router } from '@angular/router';
import store from 'src/app/_store/store';

@Component({
  selector: 'app-video-pages',
  templateUrl: './video-pages.component.html',
  styleUrls: ['./video-pages.component.css']
})
export class VideoPagesComponent implements OnInit, OnDestroy {
  private videos: Video[];
  private isVideo = false;
  private isUkr = true;
  private lang = 'ukr';
  private videoTag: string;
  private isObl = false;

  constructor(private langServ: LangSevice, private router: Router) { }

  ngOnInit() {
    this.videoTag = this.router.url.split('/').pop();
    this.getLang();
    this.getVideo();
    this.filterVideo(this.videoTag);
    if (this.videoTag === 'oblvideo') {
      this.isObl = true;
    }
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
        this.filterVideo(this.videoTag);
      }
    );
  }

  private filterVideo(tag: string) {
    if (this.videos) {
      this.videos = this.videos.filter(el => el.tag === tag);
      this.isVideo = true;
    }
  }
  ngOnDestroy() {
  }
}
