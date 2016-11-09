import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { EventTemplate } from './event-template.modal';
import { AttributeTemplate } from '../attribute-template-loader/attribute.modal';
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

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder, private eventTemplateLoaderService: EventTemplateLoaderService) {
    this.myForm = this._fb.group({
        'name': ['', Validators.required],
        'desc':[''],
        'created_by':[''],
        'created_at':[''],
        'attributes': this._fb.array([
            this.initAttributes(),
        ])
    });
  }

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

  initAttributes(){
    return this._fb.group({
        'name': ['', Validators.required],
        'type': ['',Validators.required],
        'jsonMapping':['', Validators.required]
    });
  }

  addAttributes() {
      const control = <FormArray>this.myForm.controls['attributes'];
      control.push(this.initAttributes());
  }

  removeAttributes(i: number) {
      const control = <FormArray>this.myForm.controls['attributes'];
      control.removeAt(i);
  }

  onSubmit(){
    console.log(this.myForm,'It Works!!');
  }

  ngOnInit() {
    this.getEventTemplate();
  }

}
