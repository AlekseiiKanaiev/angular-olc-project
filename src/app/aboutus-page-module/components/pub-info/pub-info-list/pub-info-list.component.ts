import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Service } from 'src/app/_models/service.model';

@Component({
  selector: 'app-pub-info-list',
  templateUrl: './pub-info-list.component.html',
  styleUrls: ['./pub-info-list.component.css']
})
export class PubInfoListComponent implements OnInit {
  @Input() services: Service[];

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
