const addHello = require('./addHello');

test.skip('addHello world', () => {
  expect(addHello('world')).toBe('worldhello');
});
