const multifly = require('./multiply');

test('multifly 1 * 2 to equal 2', () => {
  expect(multifly(1, 2)).toBe(2);
});
