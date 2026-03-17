// let phoneBook = {};

// phoneBook['John Smith'] = '+1-555-7859';
// phoneBook['Anne Frank'] = '+1-555-1259';
// phoneBook['Peter Parker'] = '+1-555-4562';

let phoneBook = {
    'John Smith': '+1-555-7859',
    'Anne Frank': '+1-555-1259',
    'Peter Parker': '+1-555-4562',
};

// console.log(phoneBook);
// console.log(phoneBook['Anne Frank']);

// // обръщаме ги в ентрийс 
// let entries = Object.entries(phoneBook);
// console.log(entries);

// обхождане на всички ключове 
// for (let ..... in .......) 

for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
}

// проверяваме дали дадена стойност съществува с метода hasOwnProperty - true/ false
// case sensitive
console.log(phoneBook.hasOwnProperty('John Smith'));

// може и с променлива да се провери
let key = 'Anne Frank';
console.log(phoneBook.hasOwnProperty(key));


// деструктуриране - вадим променливите от обекта



