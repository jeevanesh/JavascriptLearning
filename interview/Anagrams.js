// Q5. Write a function that checks whether two strings are anagrams or not?

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("abc", "xyz"));

function areAnagrams(str1, str2){
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}
