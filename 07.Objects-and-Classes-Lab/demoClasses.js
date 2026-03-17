// създаваме клас
class Person {
    firstName;
    lastName;
    age;

    // трябва да създадем конструктур
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // може да създаден и метод / функция
    sayHello() {
        console.log(`Hello there, my name is ${this.firstName} ${this.lastName} and I am ${this.age}!`);
    }

    // можем да създадем статичен метод
    static formatName (person) {
        return `${person.lastName}, ${person.firstName}`;
    }
}

// създаваме инстанция 
let myPerson = new Person('Peter', 'Johnson', 32);

// myPerson.firstName = 'Peter';
// myPerson.lastName = 'Johnson';
// myPerson.age = 32;

console.log(myPerson);
myPerson.sayHello();

// true or false
console.log(myPerson instanceof Person);

// извикваме статичния метод
console.log(Person.formatName(myPerson));