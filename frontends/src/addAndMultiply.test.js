const addAndMultiply = require('./addAndMultiply');

test('addAndMultiply (1 + 2) * 3', () => {
  expect(addAndMultiply(1, 2, 3)).toBe(9);
});
