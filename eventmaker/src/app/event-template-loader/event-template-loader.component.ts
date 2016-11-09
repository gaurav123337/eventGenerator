import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EventTemplate } from './event-template.modal';
import { EventTemplateLoaderService } from './event-template-loader.service';

@Component({
  selector: 'event-template-loader',
  templateUrl: './event-template-loader.component.html',
  styleUrls: ['./event-template-loader.component.css'],
  providers: [EventTemplateLoaderService]
})
export class EventTemplateLoaderComponent {
  @Input()
  templateLoader:EventTemplate;

  constructor(private eventTemplateLoaderService: EventTemplateLoaderService) { }

  // template ={
  //   name:'',
  //   desc:'',
  //   created_by:'',
  //   created_at:'',
  //   modified_by:'',
  //   modified_at:'',
  //   attributes:'',
  //   path:''
  // };

  template ={
    name:'',
    desc:'',
    created_by:'',
    created_at:''
  };
  getEventTemplate() {
    let data;
    this.eventTemplateLoaderService.getEventTemplate().subscribe(
      data => {
        this.templateLoader = data;
        console.log(this.templateLoader,"this.templateLoader");
      }
    );
  }

  onSubmit(form: NgForm){
    console.log(this.template,'It Works!!');
  }

  ngOnInit() {
  	this.getEventTemplate();
  }

}
