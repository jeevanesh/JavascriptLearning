// Q3. Write a function that checks whether a given string is a palindrome or not?

function isPalindrom(str){
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrom("racecar"));  // true
