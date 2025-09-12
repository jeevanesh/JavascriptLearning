let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);  // [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// toString() method
let text = fruits.toString();
console.log(text);  // Banana,Orange,Apple,Mango

// join() method
let text1 = fruits.join(" * ");
console.log(text1);  // Banana * Orange * Apple * Mango

// pop() method
fruits.pop();  // removes the last element
console.log(fruits);  // [ 'Banana', 'Orange', 'Apple' ]

// push() method
fruits.push("Kiwi");  // adds a new element at the end
console.log(fruits);  // [ 'Banana', 'Orange', 'Apple', 'Kiwi' ]

// shift() method
fruits.shift();  // removes the first element
console.log(fruits);  // [ 'Orange', 'Apple', 'Kiwi' ]

// unshift() method
fruits.unshift("Lemon");  // adds a new element at the beginning
console.log(fruits);  // [ 'Lemon', 'Orange', 'Apple', 'Kiwi' ]

// Deleting an element
fruits = ["Banana", "Orange", "Apple", "Kiwi"];
delete fruits[0];  // deletes the first element but leaves undefined
console.log(fruits);   // [ <1 empty item>, 'Orange', 'Apple', 'Kiwi' ]
console.log(fruits.length);  // 4


// concat() method
let citrus = ["Lemon", "Pineapple"];
let allFruits = fruits.concat(citrus);
console.log(allFruits);  // [ <1 empty item>, 'Orange', 'Apple', 'Kiwi', 'Lemon', 'Pineapple' ] 

// splice() method
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);  // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// slice() method
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits);  // [ 'Orange', 'Lemon' ]
console.log(fruits);  // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// sort() method
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);  // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// reverse() method
fruits.reverse();
console.log(fruits);  // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

// Numeric sort
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);  // [ 1, 5, 10, 25, 40, 100 ]

points.sort(function(a, b){return b - a});
console.log(points);  // [ 100, 40, 25, 10, 5, 1 ]











