// Q4. Write a function to remove duplicate elements from an array.

console.log(removeDuplicates([1,1, 2, 3, 4, 4, 5, 6, 6]));
// console.log(removeDuplicatesUsingSet([1,1,2,3,6,3]));

function removeDuplicates(arr){
    const uniqueElements = [];

    for(let i=0; i<arr.length; i++){
        console.log(uniqueElements.indexOf(arr[i]));

        if(uniqueElements.indexOf(arr[i]) === -1){
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
}

function removeDuplicatesUsingSet(arr){
    // Step 1: Convert Array to Set (which only allows unique values)
    // Step 2: Cpnvert Set back to an array
    return [...new Set(arr)];
}