// function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T, say: Function) {
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter1 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
    say() {
        console.log('say goodbye')
    }
}

console.log(new Greeter1("world"));