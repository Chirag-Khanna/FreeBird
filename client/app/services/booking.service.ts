import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http }from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable()
export class BookingService {

  constructor(private http:Http) { }

  book(bookDetail) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("/api/book", bookDetail, options)
                    .map(this.extractResponse.bind(this))
                    .catch(this.handleError);
  }
   private extractResponse(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
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


