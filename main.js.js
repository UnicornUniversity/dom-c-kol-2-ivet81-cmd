// Function for converting decimal to binary
export function decimalToBinary(number) {
    let binary = "";

    // 3.A: Not an integer
    if (!Number.isInteger(number)) {
        return "Error: Please enter an integer number.";
    }

    // 3.B: Negative number
    if (number < 0) {
        return "Error: Negative numbers are not supported.";
    }

    // 3.C: Valid number
    if (number === 0) {
        return "0";
    }

    // HDS 4 – Iteration
    while (number > 0) {
        let remainder = number % 2;
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }

    return binary;
}

// Program logic (user interaction)
let input = prompt("Enter a decimal number:");
let number = Number(input);

let result = decimalToBinary(number);

alert("Result: " + result);
