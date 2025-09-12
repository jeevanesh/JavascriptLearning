// Q1. Write a function that returns the reverse of a string

// Function to reverse a given string
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Alternative method using built-in functions
function reverseStringUsingBuiltIn(str) {
    return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("hello java")); // Output: "avaj olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

console.log(reverseStringUsingBuiltIn("selenium"));
console.log(reverseStringUsingBuiltIn("Tutorial"));