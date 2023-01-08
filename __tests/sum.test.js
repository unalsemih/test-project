const { sum, sumAllNumbers } = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum all numbers', () => {
  expect(sumAllNumbers([1, 2, 3], 6))
})