const routeKey = Symbol('routes')

export enum Method {
    ALL = 'all',
    DELETE = 'delete',
    GET = 'get',
    HEAD = 'head',
    OPTIONS = 'option',
    PATCH = 'patch',
    POST = 'post',
    PUT = 'put'
}

export type Path = string | RegExp

export const Controller = (target: any) => {
    console.log(target.prototype[routeKey])
}

export interface RequestMap {
    path?: Method | Method[]
}

function RequestMapping(path?: Path | RequestMap, method?: Method | Method[]): any {
    console.log(path, method)
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log(target, propertyKey, descriptor ,target.prototype)
    }
}

export {
    RequestMapping
}