import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { EventList } from './events-list.modal';

@Injectable()
export class EventsListServiceService {

	private headers = new Headers({'Content-Type': 'application/json'});
	constructor(private http: Http) { }

	getEvents(): Promise<any> {
		return this.http.get('app/dataJson/eventList.json')
		.toPromise()
		.then(response => response.json())
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}
