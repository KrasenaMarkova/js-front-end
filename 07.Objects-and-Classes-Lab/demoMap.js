// ключовете могат да са от всички типове
// реда на въвеждане съвпада с реда на съхранение
// мапа не може да бъде сортиран
let myMap = new Map();

console.log(myMap);

myMap.set('John Snow', '+1-555-359');
myMap.set('Jessy Parse', '+1-555-592');
myMap.set('Ani Kelly', '+1-555-249');

console.log(myMap.get('Ani Kelly'));

// метод за проверка true / false
console.log(myMap.has('Ani Kelly1'));

// size - казва колко записа има в мапа
console.log(myMap.size);

// обхождаме и връща директно ентитата
// така се разпечатва като масив в [] скоби
for (let entry of myMap) {
    console.log(entry);
}

// така разпечатваме като текст
for (let [name, phone] of myMap) {
    console.log(name, phone);
}

// можем да го обърнем в масив
console.log([...myMap.keys()][1]);
console.log([...myMap.values()][1]);
console.log([...myMap.entries()][1]);

// можем да изтрием всичко мапа
myMap.clear();

// ако искаме да изприен даден запис
myMap.delete('John Snow');
