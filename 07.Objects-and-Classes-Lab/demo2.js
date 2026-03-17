function createPerson (firstName, lastName, age) {
    //КОМПОЗИЦИЯ
    // създаваме обект със същите имена като променливата
    let person = {
        firstName,
        lastName,
        age
    };

    return person;
}

console.log(createPerson("George", 
"Smith",
"18"
));



let person1 = {
    name: 'Peter',
    age: 21,
};

// добаваме променлива чрез функция
person1.sayHello = function() {
console.log('Hello there');
}
console.log(person1)
