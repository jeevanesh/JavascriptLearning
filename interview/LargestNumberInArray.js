// Q7. Write a function to find the largest number in an array.

findLargestNumber([1, 4, 6, 8, 3]);

function findLargestNumber(arr){
    let largest = arr[0];
    let smallest = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    console.log("Largest number: ", largest);
    // return largest;
    console.log("Smallest number: ", smallest);
}