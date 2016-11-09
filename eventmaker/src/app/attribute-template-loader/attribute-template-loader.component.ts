import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AttributeTemplate } from './attribute.modal';

@Component({
  selector: 'attribute-template-loader',
  templateUrl: './attribute-template-loader.component.html',
  styleUrls: ['./attribute-template-loader.component.css']
})
export class AttributeTemplateLoaderComponent  {
	@Input('group')
    public attrForm: FormGroup;
}
