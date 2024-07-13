function sum(a, b) {
    return a + b;
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculatorObject = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    },
};

// Main cipher function
function caesarCipher(string, shift) {
    if (typeof string !== 'string' || typeof shift !== 'number') {
        throw new TypeError('Expected a string and a number');
    }

    let result = string
        .split('')
        .map((character) => {
            let checkedCharacter = isCharacterLetter(character, shift);
            return checkedCharacter;
        })
        .join('');

    return result;
}

// Helper functions for the main cipher function
// Checks if a character is a letter (a-z or A-Z) returns null if not.
function isCharacterLetter(character, shift) {
    let result;
    let matchedCharacter = character.match(/[a-zA-Z]/g);

    // If character is not letter return character
    if (matchedCharacter === null) {
        result = character;
    } else {
        result = shiftCharacter(character, shift);
    }

    return result;
}

// Shifts a single character by the given shift factor
function shiftCharacter(character, shift) {
    let shiftedCharacter = '';
    const characterCode = character.charCodeAt(0);

    // Determine base ASCII code for case
    // Magic Numbers Explained:
    // 65-90 are the ranges for A-Z (uppercase letters)
    // 97-122 are the ranges for a-z (lowercase letters)
    // 26 is the number of letters in the alphabet
    const isUpperCase = characterCode >= 65 && characterCode <= 90;
    const isLowerCase = characterCode >= 97 && characterCode <= 122;
    const baseCode = isUpperCase ? 65 : isLowerCase ? 97 : null;

    // Calculate new character and ensure it wraps around correctly
    // Normalize character code to 0-25 range
    const normalizedCharacterCode = characterCode - baseCode;

    // Apply shift and wrap within the range 0-25
    const shiftedNormalizedCharacterCode =
        (normalizedCharacterCode + shift) % 26;

    // Handle negative shifts by wrapping around
    const wrappedCharacterCode =
        shiftedNormalizedCharacterCode < 0
            ? shiftedNormalizedCharacterCode + 26
            : shiftedNormalizedCharacterCode;
    const newCharacterCode = wrappedCharacterCode + baseCode;

    shiftedCharacter += String.fromCharCode(newCharacterCode);

    return shiftedCharacter;
}

function analyzeArray(arr) {
    let object = {};

    object.length = arr.length;

    //
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    object.max = largest;

    //
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
            console.log(lowest);
        }
    }
    object.min = lowest;

    //
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    object.average = average;

    console.log(object);
    return object;
}

export {
    sum,
    capitalize,
    reverseString,
    calculatorObject,
    caesarCipher,
    analyzeArray,
};
