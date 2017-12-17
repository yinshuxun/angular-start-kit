import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { FormsModule } from '@angular/forms';

import { Page3 } from './page3.component'
import { SimpleForm } from 'app/components/simple-form/simple-form.component'

const routes: Routes = [
    {
        path: '',
        component: Page3
    }
]

@NgModule({
    declarations: [
        Page3,
        SimpleForm
    ],
    imports: [
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class Page3Module { }
