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
    counter: Observable<Number>
    title: string = 'this is page2'

    constructor(private store: Store<AppState>, activeTitleService: ActiveTitleService) {
        this.counter = store.select('counter');
        this.title = activeTitleService.getTitle()
    }

    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        const self = this
        setTimeout(function () {
            self.store.dispatch({ type: DECREMENT });
        }, 1000)
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }
}