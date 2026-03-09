let regexp = /l/g;
let myStr = 'hello there';

console.log(regexp.test(myStr))

// ни показва и колко съвпадение имаме
console.log(myStr.match(regexp));


let regexp1 = /\bis\b/g;
let myStr1 = 'This is a word and it also is a sentence';

// ни показва съвпадение имаме
console.log(myStr1.match(regexp1).length);


// много не е полезно!!!
let matches = myStr1.matchAll(regexp1);
console.log([...matches]);

