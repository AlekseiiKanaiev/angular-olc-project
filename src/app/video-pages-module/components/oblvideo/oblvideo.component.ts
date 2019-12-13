import { Component, OnInit } from '@angular/core';
import { LangSevice } from 'src/app/_services/lang.service';
import { GetDataService } from 'src/app/_services/getData.service';
import { Video } from 'src/app/_models/video.model';
import store from 'src/app/_store/store';
import { TitleSerice } from 'src/app/_services/titleService.service';

@Component({
  selector: 'app-oblvideo',
  templateUrl: './oblvideo.component.html',
  styleUrls: ['./oblvideo.component.css']
})
export class OblvideoComponent implements OnInit {
  private lang = 'ukr';
  isUkr = true;
  videos: Video[];
  isVideo = false;

  constructor(private langServ: LangSevice, private titleServ: TitleSerice) { }

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
        const name = (this.isUkr) ? 'Відео для облради' : 'Видео для облсовета';
        this.titleServ.setTitle(name);
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
      this.videos = this.videos.filter(el => el.tag === 'oblvideo');
      this.isVideo = true;
    }
  }
}
