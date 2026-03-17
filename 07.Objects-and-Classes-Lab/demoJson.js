let jsonData = '{"name": "Peter", "lastName": null, "age": 21}';

console.log(typeof jsonData); //string
console.log(jsonData); //{"name": "Peter", "lastName": null, "age": 21}
console.log(jsonData.name); //undefined

let person = JSON.parse(jsonData);

console.log(typeof person); //object
console.log(person); //{name: 'Peter', lastName: null, age: 21}
console.log(person.name); //Peter

