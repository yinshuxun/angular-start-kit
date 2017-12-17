import { Component } from '@angular/core'
import { INCREMENT, DECREMENT, RESET } from 'app/ars/reducer/counter';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'
import { ActiveTitleService } from 'app/service/ActiveTitle.service';

interface AppState {
    counter: number
}

@Component({
    selector: 'Page2',
    templateUrl: './page2.component.html'
})

export class Page2 {
    private isShow: boolean = false
    title: string = 'this is page2'
    formData:object

    constructor( activeTitleService: ActiveTitleService) {
        this.title = activeTitleService.getTitle()
    }
}
