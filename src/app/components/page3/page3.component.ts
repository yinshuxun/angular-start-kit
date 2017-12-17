import { Component } from '@angular/core'

import { ActiveTitleService } from 'app/service/ActiveTitle.service';
import { User } from 'app/beans/user.class'

interface AppState {
    counter: number
}

@Component({
    selector: 'Page3',
    templateUrl: './page3.component.html'
})

export class Page3 {
    title: string = 'this is page3'
    user: User = new User("yinshuxun", '471dddddd@qq.com', 'noting is impossible!', 'apple')

    get userInfo() {
        return JSON.stringify(this.user)
    }
}
