import {Injectable} from '@angular/core'

@Injectable()
export class ActiveTitleService{
    getTitle(){
        return Math.random().toFixed(2)  + 'title'
    }
}