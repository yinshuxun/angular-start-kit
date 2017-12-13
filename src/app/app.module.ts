import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { Page1 } from 'app/components/page1/page1.component'
import { Page2 } from 'app/components/page2/page2.component'
import { PageNotFound } from './pageNotFound/pageNotFound.component'
import { UserList } from './components/user-list/user-list.componet'

import { UnlessDirective } from './directive/unless.directive'
import { MyHighlightDirective } from './directive/myHighlight.directive'

import { ActiveTitleService } from './service/ActiveTitle.service'
import { Logger } from './service/logger.service'

import { counterReducer } from './ars/reducer/counter'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFound,
    Page1,
    Page2,
    UnlessDirective,
    MyHighlightDirective,
    UserList
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  providers: [ActiveTitleService, Logger],
  bootstrap: [AppComponent]
})

export class AppModule {

}
