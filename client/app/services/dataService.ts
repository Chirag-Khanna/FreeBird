import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class DataService {
    webDataConfig: any;
    constructor(private http: Http) {
        this.webDataConfig = null;
    }

    // getWebData(): Observable<any> {
    //     //    let params = new URLSearchParams();
    //     //     params.set('TaskId', taskId);
    //     if (this.webDataConfig) {
    //         return Observable.of(this.webDataConfig);
    //     }
    //     else {
    //         return this.http.get("/api/fetchWebData")
    //         .map(this.extractData.bind(this))
    //         .catch(this.handleError);
    //     }
    // }

    getWebData() {
        return Observable.of({})
    };
    private extractData(res: Response) {
        let body = res.json();
        if (body.Error) {
            return body.Error;
        }
        else {
            this.webDataConfig = body;
            return body || {};
        }
    }
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}