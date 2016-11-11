import { Component, OnInit, Input } from '@angular/core';

import { EventsListServiceService } from './events-list.service';
import { EventList } from './events-list.modal';
import { ViewEventDetailService } from '../view-event/view-event-detail.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
  providers: [EventsListServiceService, ViewEventDetailService]
})
export class EventsListComponent  {

  eventsList: EventList[];
  selectedEvent: EventList;
  @Input('eventInfo')
  eventInfo: EventList;

  constructor(private eventListService: EventsListServiceService, private eventDetailsService: ViewEventDetailService) { }

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
      		console.log(eventsList,"eventsList");
      });
	}

  getEventDetails(eventInfo: EventList) {
    this.selectedEvent = eventInfo;
    console.log( this.selectedEvent," this.selectedEvent");
    this.eventDetailsService
      .getEventDetail(this.selectedEvent["event-name"])
      .then(eventInfo => {
          this.eventInfo = eventInfo;
          console.log(eventInfo,"eventInfo");
      });
  }

	ngOnInit() {
    	this.getEventsList();
  	}
 }
