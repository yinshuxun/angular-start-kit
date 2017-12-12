import { Injectable } from '@angular/core'

@Injectable()
export class Logger {
    logs: string[] = [];

    log(msg: string) {
        console.warn(`this is form log.service: ${msg}`)
        this.logs.push(msg)
    }
}