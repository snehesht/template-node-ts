export class Greeter {
  constructor() {}

  greet(name: string): string {
    return `Hello ${name}`;
  }
}

const g = new Greeter();
console.log(g.greet('World'));
