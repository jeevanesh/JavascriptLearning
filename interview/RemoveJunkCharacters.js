let str = "abc's test#s^%&^*&";
let result = str.replace(/[^\w\s]/g, "");

console.log(result);