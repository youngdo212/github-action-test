const concatString = require('./concatString');

test('concatString "hello", "world" is "helloworld"', () => {
  expect(concatString('hello', 'world')).toBe('helloworld');
});
