# Practice Testing with Jest

## Introduction

This project is part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice) focuses on practicing testing using Jest.

## Features

1. **Capitalize Function**
    - A function that takes a string and returns it with the first character capitalized.

2. **Reverse String Function**
    - A function that takes a string and returns it reversed.

3. **Calculator Object**
    - An object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

4. **Caesar Cipher Function**
    - A function that takes a string and a shift factor and returns it with each character “shifted”.
    - Wraps from z to a. For example, `caesarCipher('xyz', 3)` should return `'abc'`.
    - Preserves case. The shifted lettercase should follow the original lettercase. For example, `caesarCipher('HeLLo', 3)` should return `'KhOOr'`.
    - Keeps punctuation unchanged. For example, `caesarCipher('Hello, World!', 3)` should return `'Khoor, Zruog!'`.

5. **Analyze Array Function**
    - A function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

    ```javascript
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);

    object == {
       average: 4,
       min: 1,
       max: 8,
       length: 6
    };
    ```

## Technologies Used

- JavaScript (ES6)
- Jest

## How to Run Locally

1. **Clone the Repository**:

    ```bash
    git clone git@github.com:ExtF8/testingBasics.git
    cd testingBasics
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Run Tests**:
    - To run the tests:

    ```bash
    npm test
    ```

    - To run the tests in watch mode:

    ```bash
    npm run watch
    ```
