import { Component, OnInit } from '@angular/core';

import { EventsListServiceService } from './events-list.service';
import { EventList } from './events-list.modal';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsListServiceService]
})
export class EventsListComponent  {

  eventsList: EventList[];
  //eventsInfo:any;

  constructor(private eventListService: EventsListServiceService) { }

 //  getEventsList(): void {
 //  this.eventListService
 //      .getEvents()
 //      .then(eventsList => {
 //      		this.eventsList = eventsList;
 //      		console.log(eventsList,"eventsList");
 //      });
	// }

	 getEventsList(): void {
  		this.eventListService
      .getEvents()
      .then(eventsList => {
      		this.eventsList = eventsList.event_list;
      		//this.eventsInfo = eventsList.event_list;
      		console.log(eventsList,"eventsList");
      		//console.log(eventsInfo,"eventsInfo");
      });
	}

	ngOnInit() {
    	this.getEventsList();
  	}
 }
