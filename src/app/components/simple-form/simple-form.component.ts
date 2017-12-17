import { Component, Input } from '@angular/core'
import { User } from 'app/beans/user.class'

@Component({
    selector: "simple-form",
    templateUrl: "./simple-form.html",
    styles: [':host /deep/ .demo-form-container { padding: 10px 300px}']
})

export class SimpleForm {
    @Input() user: User

    constructor() {
        console.log(this.user)
    }

    get userInfo() {
        return JSON.stringify(this.user)
    }
}
