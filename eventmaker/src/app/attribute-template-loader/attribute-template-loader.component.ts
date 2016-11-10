import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AttributeTemplate } from './attribute.modal';
import { AttributeTemplateLoaderService } from './attribute-template-loader.service'

@Component({
  selector: 'attribute-template-loader',
  templateUrl: './attribute-template-loader.component.html',
  styleUrls: ['./attribute-template-loader.component.css'],
  providers: [AttributeTemplateLoaderService]
})
export class AttributeTemplateLoaderComponent  {
	@Input('group')
    public attrForm: FormGroup;

    @Input()
  	attributetypeLoader:any;

    constructor(private AttributeTemplateLoaderService: AttributeTemplateLoaderService){}

    getAttributeType() {
    let data;
    this.AttributeTemplateLoaderService.getAttributeType().subscribe(
      data => {
        this.attributetypeLoader = data;
        console.log(data);
        console.log(this.attributetypeLoader);
      }
    );
  }

  ngOnInit() {
    this.getAttributeType();
  }
}
