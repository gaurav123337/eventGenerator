import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AttributeTemplate } from './attribute.modal';

@Component({
  selector: 'attribute-template-loader',
  templateUrl: './attribute-template-loader.component.html',
  styleUrls: ['./attribute-template-loader.component.css']
})
export class AttributeTemplateLoaderComponent  {
	@Input()
	attributeLoader : AttributeTemplate;

	constructor(private changeDetectorRef: ChangeDetectorRef) { }

	attrTemplate =[{
	    name:'',
	    type:'',
	    jsonMapping:''
	}];

	/*Add New Attribute*/
	addNewAttribute() {
		this.attrTemplate.push({
			name: '',
			jsonMapping: '',
			type: ''
		});
	}

	/*Delete Attribute*/
	deleteAttribute(rowNumber: number) {
		this.attrTemplate.splice(rowNumber, 1);
    	this.changeDetectorRef.detectChanges();
	}
}
