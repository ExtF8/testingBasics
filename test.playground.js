function sum (a, b) {
    return a + b
};

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function reverseString (string) {
    return string.split('').reverse().join('')
}

const calculatorObject = {
    add (a, b) {
        return a + b
    },

    subtract (a, b) {
        return a - b
    },

    divide (a, b) {
        return a / b
    },

    multiply (a, b) {
        return a * b
    }
}


export { sum, capitalize, reverseString, calculatorObject };