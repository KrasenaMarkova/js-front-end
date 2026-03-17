
// обекти
// при създаване може да направим празен обект и после да вкарваме стойности
let person = {};
let myObj = { name: 'Peter', age: 21 };

console.log(myObj);

// key = String
console.log(myObj['name']);
console.log(myObj.name);

// променяме стойноста
myObj.name = 'John';
console.log(myObj.name);

//ако се помъчим да достъпим нещо, което не съществува = undefined
console.log(myObj.occupation);

// добавяме
myObj.occupation = 'Teacher';
console.log(myObj);

// изтриване
delete myObj.age;
console.log(myObj);