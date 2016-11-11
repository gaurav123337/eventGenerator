import { Component, OnInit, Input } from '@angular/core';

import { ViewEventDetailService } from './view-event-detail.service';


@Component({
  selector: 'view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent  {

	@Input()
	eventInfo: ViewEventDetailService

  	constructor() { }

}
