let cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); // Saab
console.log(cars.length); // 3

// Add new element
cars.push("Audi");
console.log(cars); // ["Saab", "Volvo", "BMW", "Audi"]

// Update element
cars[1] = "Mercedes";
console.log(cars); // ["Saab", "Mercedes", "BMW", "Audi"]

// Delete element
delete cars[2];
console.log(cars);

// Note: The length remains the same, but the element at index 2 is now undefined
console.log(cars.length); // 4
console.log(cars[2]); // undefined

// Iterate over array
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

let myArray = ["Hello", 123, true, null, undefined, {name: "John"}, [1, 2, 3]];
console.log(myArray);

let person1 = {name: "Alice", age: 25};
let person2 = {name: "Bob", age: 30};

let myArray2 = [person1, person2];  // array of objects
console.log(myArray2);
console.log(myArray2[0].name);

console.log(myArray2[1].age);

let fruits = ["Apple", "Banana", "Cherry"];

// looping through array using for...of
for(let fruit of fruits) {
    console.log(fruit);
}

// looping through array using for...in
for(let i in fruits) {
    console.log(fruits[i]);
}