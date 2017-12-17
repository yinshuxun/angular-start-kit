import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound } from './pageNotFound/pageNotFound.component';

const appRoutes: Routes = [
    {
        path: 'page1',
        loadChildren: 'app/components/page1/page1.module#Page1Module'
    },
    {
        path: 'page2',
        loadChildren: 'app/components/page2/page2.module#Page2Module'
    },
    {

        path: 'page3',
        loadChildren: 'app/components/page3/page3.module#Page3Module'
    },
    {
        path: '',
        redirectTo: '/page1',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFound }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            useHash: true,
            // enableTracing: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
