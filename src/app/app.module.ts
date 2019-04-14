import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DotsComponent } from './dots.component';
import {DotsService } from './dots.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DotsComponent ],
  providers : [DotsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
