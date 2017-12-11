import { Component } from '@angular/core'
import { INCREMENT, DECREMENT, RESET } from '../ars/reducer/counter';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store'

interface AppState {
    counter: number
}

@Component({
    selector: 'Page2',
    templateUrl: './page2.component.html'
})

export class Page2 {
    private isShow :boolean= false
    counter: Observable<Number>

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
    }

    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        const self = this
        setTimeout(function(){
            self.store.dispatch({ type: DECREMENT });
        },1000)
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }
}