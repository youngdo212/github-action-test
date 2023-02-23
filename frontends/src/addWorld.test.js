const addWorld = require('./addWorld');

test('addWorld test', () => {
  expect(addWorld('hello ')).toBe('hello world');
});
