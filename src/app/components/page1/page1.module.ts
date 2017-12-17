import { NgModule } from '@angular/core'
import {CommonModule} from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { Page1 } from './page1.component'
import { counterReducer } from 'app/ars/reducer/counter'

const routes: Routes = [
    {
        path: '',
        component: Page1
    }
]

@NgModule({
    declarations: [Page1],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forRoot({ counter: counterReducer }),
    ],
    exports: [RouterModule]
})

export class Page1Module { }
