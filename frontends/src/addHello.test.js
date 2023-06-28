const addHello = require('./addHello');

test('addHello world', () => {
  expect(addHello('world')).toBe('world hello');
});
