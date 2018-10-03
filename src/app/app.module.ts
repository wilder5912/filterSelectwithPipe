import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {  FormsModule } from '@angular/forms';
import {   HttpModule } from '@angular/http';
import { FilterSelectPipe } from './service/pipe/filter-select.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterSelectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
