import { Injectable } from '@angular/core'
import { User } from './user.class'
import { Logger } from '../../service/logger.service';

const users: User[] = [
    new User('yinshuxun', 22),
    new User('yinyongxiang', 23),
    new User('jiushiai', 24),
    new User('zhuzhu', 25),
]

@Injectable()
export class UserService {
    constructor(private logger: Logger){
    }

    getUsers() {
        this.logger.log('get Users');
        return users
    }
}

