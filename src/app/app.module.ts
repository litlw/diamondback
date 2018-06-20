import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SampleDashComponent } from './sample-dash/sample-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleDashComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
