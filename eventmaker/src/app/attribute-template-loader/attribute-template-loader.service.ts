import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AttributeTemplateLoaderService {

  constructor(private http: Http) { }

  getAttributeType(){
    return this.http.get('app/dataJson/attribute.json').map((res:Response) => res.json() );
  }

}