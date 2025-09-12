let text = '{"employees" : [' +
'{"firstName":"John" , "lastName":"Doe" },' +
'{"firstName":"Anna" , "lastName":"Smith" },' +
'{"firstName":"Peter" , "lastName":"Jones" }]}';

let obj = JSON.parse(text);  // Convert JSON string to JavaScript object

console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName);  // Anna Smith