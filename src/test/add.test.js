//running jest in watch mode
//yarn test -- --watch

const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

describe('add', () => {
  test('should add two numbers', () => {
    expect(add(1, 4)).toBe(5);
  });

  test('should generate Greeting', () => {
    expect(generateGreeting('Akash')).toBe('Hello Akash!');
  });
});