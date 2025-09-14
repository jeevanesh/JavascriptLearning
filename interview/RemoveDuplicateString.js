// Q4. Write a function to remove duplicate elements from an array.

console.log(removeDuplicate(["Java", "Javascript", "Ruby", "Java", "Ruby"]));

function removeDuplicate(arr){
    const uniqueElements = [];
    
    for(let i=0; i<arr.length; i++){
        
        if(!uniqueElements.includes(arr[i])){
            uniqueElements.push(arr[i]); // Java, Javascript, Ruby
        }
    }
    return uniqueElements;
}