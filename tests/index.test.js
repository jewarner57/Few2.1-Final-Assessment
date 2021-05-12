/* eslint-disable no-undef */
const index = require('../index.js')

// Challenge 5

test('All Zeros', () => {
  expect(index.formatPhoneNumer('0000000000')).toBe('(000) 000-0000')
})

test('Various Correct Numbers', () => {
  expect(index.formatPhoneNumer('2484345508')).toBe('(248) 434-5508')
  expect(index.formatPhoneNumer('6788675309')).toBe('(678) 867-5309')
})

test('Badly formatted numbers', () => {
  expect(index.formatPhoneNumer('248-4345-508')).toBe('Phone number: 248-4345-508 is not valid.')
  expect(index.formatPhoneNumer('(678) 867-5309')).toBe('Phone number: (678) 867-5309 is not valid.')
})

test('Empty String', () => {
  expect(index.formatPhoneNumer('')).toBe('Phone number:  is not valid.')
})

test('Too Short', () => {
  expect(index.formatPhoneNumer('100')).toBe('Phone number: 100 is not valid.')
})

test('Too Long', () => {
  expect(index.formatPhoneNumer('18003983982463')).toBe('Phone number: 18003983982463 is not valid.')
})
