import {
    sum,
    capitalize,
    reverseString,
    calculatorObject,
    caesarCipher,
    analyzeArray,
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

describe('Calculator Object methods', () => {
    test('add method', () => {
        expect(calculatorObject.add(1, 2)).toBe(3);
    });

    test('subtract method', () => {
        expect(calculatorObject.subtract(4, 2)).toBe(2);
    });

    test('multiply method', () => {
        expect(calculatorObject.multiply(4, 4)).toBe(16);
    });

    test('divide method', () => {
        expect(calculatorObject.divide(12, 3)).toBe(4);
    });
});

describe('Caesar Cipher', () => {
    test('shifts letters by the given factor', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
        expect(caesarCipher('xyz', 2)).toBe('zab');
        expect(caesarCipher('ABC', 3)).toBe('DEF');
        expect(caesarCipher('XYZ', 4)).toBe('BCD');
    });

    test('shifting uppercase letters', () => {
        expect(caesarCipher('ABC', 1)).toBe('BCD');
    });

    test('wrapping lowercase from a to z', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('wrapping uppercase from A to Z', () => {
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
        expect(caesarCipher('ABC', -2)).toBe('YZA');
    });
});

describe('Analyze array', () => {
    const arr = [1, 8, 3, 4, 2, 6, 7, 10, 12];
    const data = analyzeArray(arr);

    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / arr.length;

    test('average', () => {
        expect(data.average).toEqual(average);
    });

    test('min', () => {
        expect(data.min).toEqual(Math.min(...arr));
    });

    test('max', () => {
        expect(data.max).toEqual(Math.max(...arr));
    });

    test('length', () => {
        expect(data.length).toEqual(arr.length);
    });
});
