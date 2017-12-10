import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { Page1 } from './page1/page1.component'
import { PageNotFound } from './pageNotFound/pageNotFound.component'

import { counterReducer } from './ars/reducer/counter'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFound,
    Page1,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
