import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-tiser',
  templateUrl: './video-tiser.component.html',
  styleUrls: ['./video-tiser.component.css']
})
export class VideoTiserComponent implements OnInit {
  @Input() isUkr: boolean;

  constructor() { }

  ngOnInit() {
  }

}
