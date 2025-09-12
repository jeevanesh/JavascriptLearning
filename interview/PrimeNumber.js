// Q8. Write a function to check if a given number is prime or not? 

console.log(findPrimeNumber(7));

function findPrimeNumber(num){

    for(let i=2; i<=num/2; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}