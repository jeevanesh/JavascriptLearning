// Q9. Write a function to calculate the factorial of a number.

console.log(factorial(5));  // 1*2*3*4*5 = 120

function factorial(num){

    if(num === 0){
        return 1;
    }

    let fact = 1;
    for(let i=1; i<=num; i++){
        fact = fact * i; // 1*1=1  | 1*2=2 | 2*3=6 | 6*4=24 | 24*5=120
    }
    return fact;

}