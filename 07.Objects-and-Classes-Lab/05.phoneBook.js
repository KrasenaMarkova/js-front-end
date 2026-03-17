function solve(data) {
    let phonebook = {};

    for (let item of data) {
        // parse data -> split by ' '
        let [name, phone] = item.split(' ');

        // индексираме по име и съответно ако едно име се появи 2 пъти, така ще презавишем стойноста
        // for each item, store in the phonebook
        phonebook[name] = phone;
    }

    for (let name in phonebook) {
        // print result
        console.log(`${name} -> ${phonebook[name]}`);
    }
}


// function solve(data) {
//     let phonebook = Object.fromEntries(data.map(i => i.split(' ')));

//     for (let name in phonebook) {
//         // print result
//         console.log(`${name} -> ${phonebook[name]}`);
//     }
// }

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );
solve(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
   );