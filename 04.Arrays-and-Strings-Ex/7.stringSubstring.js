function solve (word, text) {
    splittedWords = text.split(' ');

    for (let words of splittedWords) {
        if (word.toLowerCase() == words.toLowerCase()) {
            return word;
        }
    }

    return `${word} not found!`;
}

console.log(solve('javascript','JavaScript is the best programming language'));
console.log(solve('python','JavaScript is the best programming language'));


// function solve (word, text) {
//     let current = text.toLowerCase();
//     let wordsInText = current.split(/\s+/);

//     let result = wordsInText.indexOf(word);

//     if (result >= 0) {
//         console.log(word);
//     } else {
//         console.log(`${word} not found!`);
//     }
// }
//solve('javascript','JavaScript is the best programming language');
// solve('python','JavaScript is the best programming language');



// function solve (word, text) {
//     console.log(text.toLowerCase().split(' ').includes(word.toLowerCase()) ?word :
//                     `${word} not found!`);
// }
// solve('javascript','JavaScript is the best programming language');
// solve('python','JavaScript is the best programming language');