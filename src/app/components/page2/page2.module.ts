import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { UnlessDirective } from 'app/directive/unless.directive'
import { MyHighlightDirective } from 'app/directive/myHighlight.directive'

import { ActiveTitleService } from 'app/service/ActiveTitle.service'
import { Logger } from 'app/service/logger.service'

import { Page2 } from './page2.component'
import { UserList } from 'app/components/user-list/user-list.componet'


const routes: Routes = [
    {
        path: '',
        component: Page2
    }
]

@NgModule({
    declarations: [
        UserList,
        Page2,
        UnlessDirective,
        MyHighlightDirective
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [ActiveTitleService, Logger],
    exports: [RouterModule]
})

export class Page2Module { }
