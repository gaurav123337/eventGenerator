import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AttributeTemplate } from '../attribute-template-loader/attribute.modal';

@Injectable()
export class ViewEventDetailService {

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

	getEventDetail(eventName): Promise<any> {
		return this.http.get('app/dataJson/'+eventName+'.json')
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
