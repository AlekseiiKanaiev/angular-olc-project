import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { Video } from 'src/app/_models/video.model';
import store from 'src/app/_store/store';

@Component({
  selector: 'app-oblvideo',
  templateUrl: './oblvideo.component.html',
  styleUrls: ['./oblvideo.component.css']
})
export class OblvideoComponent implements OnInit {
  private lang = 'ukr';
  private isUkr = true;
  private videos: Video[];
  private isVideo = false;

  constructor(private langServ: LangSevice, private dataServ: GetDataService) { }

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
