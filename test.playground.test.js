import { sum, capitalize, reverseString, calculatorObject } from './test.playground';


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('the first character capitalized', () => {
    expect(capitalize('text')).toBe('Text')
});

test('reversed string', () => {
    expect(reverseString('text')).toMatch('txet')
})

describe('calculator Object', () => {
    test('calculator methods', () => {
        expect(calculatorObject.add(1, 2)).toBe(3);
        expect(calculatorObject.subtract(4, 2)).toBe(2);
        expect(calculatorObject.divide(12, 3)).toBe(4);
        expect(calculatorObject.multiply(4, 4)).toBe(16)
    })
})
