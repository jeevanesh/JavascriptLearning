// Q.10 Write a program to remove all whitespace characters from a string.

console.log(removeWhiteSpace("  Happy,    Coding "));

function removeWhiteSpace(str){
   const result = str.replace(/\s/g, "");
   return result;
}