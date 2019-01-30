import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private loaderSubj = new BehaviorSubject<boolean>(true);
    loaderState = this.loaderSubj.asObservable();

    show() {
        console.log('show');
        this.loaderSubj.next(true);
    }

    hide() {
        console.log('hide');
        this.loaderSubj.next(false);
    }
}
