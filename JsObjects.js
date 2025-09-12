// Creating an object person ---> 
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(person.firstName);  // John
console.log(person["lastName"]);  // Doe
console.log(person.age);  // 30


// Add new property
person.city = "New York";
console.log(person.city);  // New York

// Update property
person.age = 31;
console.log(person.age);  // 31

// Delete property
delete person.lastName;
console.log(person.lastName);  // undefined

console.log("--- Object Properties ---");

// Iterate over properties
for (let key in person) {
    console.log(person[key]);  // print all property values
    console.log(key + " : " + person[key]);  // print all property names
}



