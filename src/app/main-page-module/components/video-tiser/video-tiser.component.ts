import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-tiser',
  templateUrl: './video-tiser.component.html',
  styleUrls: ['./video-tiser.component.css']
})
export class VideoTiserComponent implements OnInit {
  @Input() private isUkr: boolean;

  constructor() { }

  ngOnInit() {
  }

}
