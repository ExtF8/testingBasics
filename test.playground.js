function sum (a, b) {
    return a + b;
}

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString (string) {
    return string.split('').reverse().join('');
}

const calculatorObject = {
    add (a, b) {
        return a + b;
    },

    subtract (a, b) {
        return a - b;
    },

    divide (a, b) {
        return a / b;
    },

    multiply (a, b) {
        return a * b;
    },
};

// checks if a character is a letter (a-z or A-Z).
function isInputLetter (character) {
    let result = character.match(/[a-zA-Z]/g);

    return result;
}

// Shifts a single character by the given shift factor
function shiftCharacter (character, shift) {
    let result = '';
    const characterCode = character.charCodeAt(0);

    // Determine base ASCII code for case
    // Magic Numbers Explained:
    // 65-90 are the ranges for A-Z (uppercase letters)
    // 97-122 are the ranges for a-z (lowercase letters)
    // 26 is the number of letters in the alphabet
    const baseCode =
        characterCode >= 65 && characterCode <= 90
            ? 65
            : characterCode >= 97 && characterCode <= 122
                ? 97
                : null;

    // Calculate new character and ensure it wraps around correctly
    const newCharacterCode =
        ((((characterCode - baseCode + shift) % 26) + 26) % 26) + baseCode;

    result += String.fromCharCode(newCharacterCode);

    return result;
}

// Main cipher function
function caesarCipher (string, shift) {
    if (typeof string !== 'string' || typeof shift !== 'number') {
        throw new TypeError('Expected a string and a number');
    }

    let result = string
        .split('')
        .map((character) => {
            if (isInputLetter(character) === null) {
                return character;
            } else {
                return (character = shiftCharacter(character, shift));
            }
        })
        .join('');

    return result;
}

export { sum, capitalize, reverseString, calculatorObject, caesarCipher };
