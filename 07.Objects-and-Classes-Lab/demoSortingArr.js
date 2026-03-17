let myObj = {};

// като вкарваме ключове, които са стандартни, те влизат в реда на тяхното добавяне
// но ако ги JSON String има вероятност да не са по този начин подредени
// ако искаме подредени данни трябва да ползваме масив
myObj.name = 'Peter';
myObj.age = 21;
myObj.occupation = 'teacher';
//но ако вкараме ключ, който да е число
// той ще се конвейртира на стринг и ще застане най-отпред
myObj[0] = 'brown';
myObj['3'] = 'red';

console.log(myObj);

let phoneBook = {
    'John Smith': '+1-555-7859',
    'Anne Frank': '+1-555-1259',
    'Peter Parker': '+1-555-4562',
};

// превръщане в масив, като прави копие на стойностите
let entries = Object.entries(phoneBook);

// сортира по аски код
entries.sort(compareEntries);
console.log(entries);

// подредено по азбучен ред
const sortedBook = Object.fromEntries(entries);
console.log(sortedBook);

function compareEntries (nameA, nameB) {
    return nameA[0].localeCompare(nameB[0]);
}


