import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { EventTemplate } from './event-template.modal';

@Injectable()
export class EventTemplateLoaderService {

  constructor(private http: Http) { }

  getEventTemplate(){
    return this.http.get('app/dataJson/appInfo.json').map((res:Response) => res.json() );
  }
}
