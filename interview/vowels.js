// Q6. Write a function that returns the number of vowels in a string. 

console.log("Vowels are: " + countVowels("Hello Javascript"));

function countVowels(str){
    const vowels = ["a","e","i","o","u"];
    let count=0;

    for(let ch of str.toLowerCase()){
        if(vowels.includes(ch)){
            count++;
        }
    }
    return count;

}