import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { Page1 } from './page1/page1.component';
import { PageNotFound } from './pageNotFound/pageNotFound.component';

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
    imports: [ 
        RouterModule.forRoot(appRoutes,{
            useHash: true,
            enableTracing: true
        })
     ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {}
