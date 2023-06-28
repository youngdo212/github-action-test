const addAndMultiply = require('./addAndMultiply');

test('addAndMultiply (1 + 2) * 3', () => {
  expect(addAndMultiply(1, 2, 3)).toBe(9);
});

test('일부러 틀리는 테스트', () => {
  expect(addAndMultiply(2, 2, 3)).toBe(12);
});

test('not todo test', () => {
  expect(addAndMultiply(3, 2, 3)).toBe(15);
});
