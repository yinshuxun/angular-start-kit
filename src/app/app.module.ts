import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserComponent} from './user.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {MaxNumPipe} from './max-num.pipe';
import { HeroChildComponent } from './hero-list/hero-child.component';
import { HeroDetailComponent } from './hero-list/hero-detail.component';
import { HeroParent } from './hero-list/hero-parent.component';
import {MyHighlightDirective} from './directive/myHighlight.directive'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeroListComponent,
    MaxNumPipe,
    HeroChildComponent,
    HeroDetailComponent,
    HeroParent,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
