import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-main-page-comp',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
    @Input() lang = '2';
}
