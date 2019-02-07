
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleSerice {
    constructor(private title: Title) {}

    setTitle(name: string) {
        this.title.setTitle('OLC Video ' + name);
    }
}
