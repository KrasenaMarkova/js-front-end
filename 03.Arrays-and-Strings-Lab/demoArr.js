// дължината на масава не е фиксирана
// и може да имаме елементи от различен тип, но това не е много добра идея
let myArr = [10, 20, 30];

// достъпваме масива
console.log(myArr);
console.log(myArr[2]);
// колко елемента има в масива
console.log(myArr.length);
// достъпваме последният елемент
console.log(myArr[myArr.length - 1]);

// присвоява/заместваме друга стойност
myArr[2] = 33;

// за да добавим елемент в края на масава
myArr[myArr.length] = 75;
myArr.push(75, 80, 90);

console.log(myArr);

// изкарваме в променлива елементи от масива
let [a, b] = myArr;

// let a = myArr[0];
// let b =myArr[1];

// прави копие на всички останали елементи след 2 позиция
let elements = myArr.slice(2);

console.log(elements);

// така добавяме втори масив в първия
let arr2 = [40, 50, 60];
myArr.push(...arr2);

// обединяват двата масива в един
let concat = [...myArr, ...arr2];
// let concat = myArr.concat(arr2);

// обхождане на масива
for(let element of myArr) {
    // това ще ни е полезно ако са ни нужни само стойностите на масива
    console.log(element);
}

// for(let i = 0; i < myArr.length; i++) {
// ще ни е полезен ако освен стойностите ще ни са необходими и индексите
//     console.log(myArr[i]);
// }

// бавен вариант на обхождане на масив
// myArr.forEach((element) => console.log(element));



// разпечатваме на всички елементи от масив
let numbers = [1, 2, 3, 4];
let output = '';
for(let number of numbers) {
    output += (number + ' ');
}
console.log(output);

// премахване на последен елемент от масива
let lastElement = numbers.pop();
console.log(numbers);
console.log(lastElement);

// премахваме първият елемтн от масива
let firstElement = numbers.shift();
console.log(firstElement);

// вкарване на елемент в началото на масива
console.log(numbers.unshift(90));
console.log(numbers);

// ако трябва да изтрием част от масива и да запазим изтритите елементи в друг масив
// като в скобите задаваме от кой елемент да започне да трие
let out1 = myArr.splice(5);
console.log(myArr);
console.log(out1);


// ако подаде 2 елемента, 1-ят показва от къде да започне, 2-ят колко елемента да изтрие
let out2 = myArr.splice(1, 1);

console.log(myArr);
console.log(out2);

// ако подадем 3 елемента, 1-ят показва от къде да започне, 
// 2-ят колко елемента да изтрие
// 3-ят ще са нови индекви, които вкарваме в масива
let out3 = myArr.splice(1, 1, 11);

console.log(myArr);
console.log(out3);

// можем да добавимм и цял масив
let newValues = [12, 13, 14, 15];
let out4 = myArr.splice(1, 1, ...newValues);

console.log(myArr);
console.log(out4);

// ако искаме да подадем стойности
// подаваме на 2-ят елемент да е 0
let out5 = myArr.splice(1, 0, 70, 63);

console.log(myArr);
console.log(out5);

// за да направим масива отзад напред
console.log(myArr.reverse());

// за да разпечатаме елементите на масива, които да не са разделени от запетая, ги превръщаме в стринг
// join ще вкара разделителния оператор само между елементиса
console.log(myArr.join('-'));

// ако искаме да подадем стойности без да трием,
// като 1-ят параметър е този, от който ще започне да копира
// ако няма втори ще копира до края, ако има до вторият подаден параметър
// ако подадем на 1-я параметър отрицателна стойност ще вземе от дясно на ляво елементи
let el = myArr.slice(1, 3);
let copyMyArr = myArr.slice();

// filter - намира всички елементи, които отговарят на условието, което сме подали
// find -намира първият елемент, който отговаря на условията, които сме подали



//сортиране на масив
let myArrSort = [7, 13, 2, 1, -2, 3, 5];

console.log(myArrSort);
// метода sort сравнява стойностите от масива като стрингове по тяхната аски стойност
myArrSort.sort;

console.log(myArrSort);

myArrSort.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if ( a < b) {
        return -1;
    } else {
        return 0;
    }

    // подбредба по големина на числа
    //myArrSort.sort((a, b) => a - b);
})


let stringArr = ['john', 'anne', 'bob', 'Charlie'];
stringArr.sort((a, b) => a.localeCompare(b));
console.log(stringArr);

