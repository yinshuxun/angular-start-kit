let nextId = 1;

export class Hero {
  id: number;
  name: string;
  masterName: string;

  constructor(public name1: string,
              public power?: string) {
    this.id = nextId++;
    this.name = name1;
    this.masterName = power
  }
}
