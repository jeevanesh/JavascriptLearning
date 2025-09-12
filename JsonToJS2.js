data = '{ "name": "mykong", "age": 30, "address": {"street address" : "88 street", "city": "New York"} }';

mydata = '{"name":"mykong","age":30,"address":{"street address":"88 street","city":"New York"},"phone_number":{"mobile":"986353533","office":"022-7363726532"}}';



obj = JSON.parse(data);  // Convert JSON string to JavaScript object
console.log(obj.name);
console.log(obj.age);
console.log(obj.address["street address"]);
console.log(obj.address.city);

obj1 = JSON.parse(mydata);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.address["street address"]);
console.log(obj1.address.city);
console.log(obj1["phone_number"].mobile);
console.log(obj1["phone_number"].office);

console.log(obj1.phone_number.mobile);
