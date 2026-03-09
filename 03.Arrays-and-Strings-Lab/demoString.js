let myStr = 'hello, there';

// ще започне винаги от по-малкият индекс, който сме подали
console.log(myStr.substring(3, -1)); // = substring(0, 3)

console.log(myStr.slice(3, -3));

// за да открием даден текст дали се съдържа независимо от това дали буквите са малки или главни
let find = 'HELLO';
console.log(myStr.toLocaleLowerCase().indexOf(find.toLocaleLowerCase()));

// ако искаме да заменим част от стринга използваме replace
// като той трави нов стринг


//добавяне на символи в началото
// като задаваме колко да е общата дължина на стринга
console.log(myStr.padStart(20, 'asdf'));
