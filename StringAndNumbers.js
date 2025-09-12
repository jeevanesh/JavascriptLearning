let s = "Welcome";
console.log(s);

// charAt() method
console.log(s.charAt(0));  // 'W'
console.log(s.charAt(6));  // 'e'

// concat() method
console.log(s.concat(" to JavaScript"));

// replace() method
s = "Welcome to JavaScript";
console.log(s.replace("JavaScript", "Java"));  // 'Welcome to Java'

// substring() method
s = "welcome";
// wel
// s.substring(0, 3);
console.log(s.substring(0, 3)); // 'wel'

// Uppercase and Lowercase methods
S = "WElcome";
console.log(s.toUpperCase());  // 'WELCOME'
console.log(s.toLowerCase());  // 'welcome'

// split() method
s = "Welcome to JavaScript";
let words = s.split(" ");
console.log(words);  // [ 'Welcome', 'to', 'JavaScript' ]
console.log(words.length);  // 3
console.log(words[0]);  // 'Welcome'
console.log(words[1]);  // 'to'
console.log(words[2]);  // 'JavaScript'

// trim() method
s = "   Welcome to JavaScript   ";
console.log(s);  // '   Welcome to JavaScript   '
console.log(s.trim());  // 'Welcome to JavaScript'

// Number methods
let n = 1234;
console.log(n);  // 1234
console.log(typeof n);  // 'number'
console.log(n.toString());  // '1234'

let x = 102; // integer
let y = 102.7; // float
let z = 104(x)
console.log(x.toFixed(2));  // '102.00'











