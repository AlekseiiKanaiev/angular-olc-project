import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class GetQueryParamsService {
    // queryLang = 'ukr';
    constructor (private router: Router, private activeRoute: ActivatedRoute) {
        // this.activeRoute.queryParams.subscribe(
        //     (params) => {
        //         if (params.lang) {
        //             this.queryLang = params.lang;
        //         }
        //     }
        // );
    }
    getQueryLang() {
        this.activeRoute.queryParams.subscribe(
            (params) => {
                if (params['lang']) {
                    return params['lang'];
                }
            }
        );
    }
}
