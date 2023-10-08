import { Greeter } from '../src/index';

describe('Greeter', () => {
  it('greet', () => {
    const greetings = new Greeter();
    expect(greetings.greet('World')).toEqual('Hello World');
  });
});
