import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { Page1 } from './page1/page1.component'
import { PageNotFound } from './pageNotFound/PageNotFound.component'

import { counterReducer } from './ars/reducer/counter'

const appRoutes: Routes = [
  { path: 'page1', component: Page1 },
  {
    path: '',
    redirectTo: '/page1',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFound }
]

@NgModule({
  declarations: [
    AppComponent,
    Page1,
    PageNotFound
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      useHash: true
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ counter: counterReducer })
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
