import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventTemplateLoaderComponent } from './event-template-loader/event-template-loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AttributeTemplateLoaderComponent } from './attribute-template-loader/attribute-template-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    EventTemplateLoaderComponent,
    HeaderComponent,
    FooterComponent,
    AttributeTemplateLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
