let myObj = { name: 'Peter', age: 21 };

// достъпване на ключовете, които са уникални
let keys = Object.keys(myObj);
// като получаване масив от всички ключове
console.log(keys);
// за да обходим ключовете
for (let key of keys) {
    console.log(key);
    // за да разпечатаме ключовете и стойностите срещу тях
    console.log(key, '->', myObj[key]);
}

// достъпваме само стойностите
let values = Object.values(myObj);
console.log(values);

// за да достъпим и ключовете и стойностите
// връща ги като двуизмерна матрица - ключ + стойност
let entries = Object.entries(myObj);
console.log(entries);

for (let entry of entries) {
    console.log(entry[0], '->', entry[1]);
}