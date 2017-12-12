import { Component } from '@angular/core'
import { User } from './user.class'
import { UserService } from './user.service'

@Component({
    selector: "user-list",
    templateUrl: "./user-list.html",
    providers: [UserService]
})


export class UserList {
    private users: User[];
    constructor(private userService: UserService) {
        this.users = userService.getUsers()
    }
}