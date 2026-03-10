// function solve (text, num) {
//     let newText = text;
//     for (let i = 1; i < num; i++) {
//        newText += text;
//     }
//     console.log(newText);
// }
// solve("abc", 3);
// solve("String", 2);


function solve (str, n) {
   
     return str.repeat(n);
}

console.log(solve("abc", 3));
console.log(solve("String", 2));