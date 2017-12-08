import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1 } from './page1/page1.component'
import { PageNotFound } from './pageNotFound/PageNotFound.component'

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
      enableTracing: true
    }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/page1' }],
  bootstrap: [AppComponent]
})

export class AppModule {

}
