import {
    sum,
    capitalize,
    reverseString,
    calculatorObject,
    caesarCipher,
} from './test.playground';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('the first character capitalized', () => {
    expect(capitalize('text')).toBe('Text');
});

test('reversed string', () => {
    expect(reverseString('text')).toMatch('txet');
});

describe('calculator Object', () => {
    test('calculator methods', () => {
        expect(calculatorObject.add(1, 2)).toBe(3);
        expect(calculatorObject.subtract(4, 2)).toBe(2);
        expect(calculatorObject.divide(12, 3)).toBe(4);
        expect(calculatorObject.multiply(4, 4)).toBe(16);
    });
});

describe('caesar Cipher', () => {
    test('shifts letters by the given factor', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
        expect(caesarCipher('xyz', 2)).toBe('zab');
        expect(caesarCipher('ABC', 1)).toBe('BCD');
        expect(caesarCipher('XYZ', 2)).toBe('ZAB');
    });

    test('shifting uppercase letters', () => {
        expect(caesarCipher('ABC', 1)).toBe('BCD');
    });

    test('wrapping lowercase from a to z', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('wrapping uppercase from a to z', () => {
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    test('preserving the case of letters', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('keeping punctuation, spaces, and other characters unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test('handling non-string input', () => {
        expect(() => caesarCipher(123, 1)).toThrow(
            'Expected a string and a number'
        );
    });
    test('handling non-number shift', () => {
        expect(() => caesarCipher('abc', '1')).toThrow(
            'Expected a string and a number'
        );
    });

    test('handling shift values larger than 26', () => {
        // 52 is full cycle
        expect(caesarCipher('abc', 52)).toBe('abc');
        // 54 is two positions after full cycle
        expect(caesarCipher('abc', 54)).toBe('cde');
    });

    test('handling negative shift values', () => {
        expect(caesarCipher('abc', -1)).toBe('zab');
        expect(caesarCipher('ABC', -1)).toBe('ZAB');
    });
});
