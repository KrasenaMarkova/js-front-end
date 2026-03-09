// function solve (text, match) {
//     text = ` ${text} `;
//     match = ` ${match} `;
//     let count = 0;

//     let startIndex = 0;

//     while (true) {
//         let index = text.indexOf(match, startIndex);

//         if (index == -1) {
//             break;
//         }
//         count++;
//         startIndex = index + (match.length - 1);
//     }

//     console.log(count);
// }


function solve (text, match) {
    let tokens = text.split(' ');
    let count = 0;

    for(let word of tokens) {
        if(word == match) {
            count++;
        }
    }

    console.log(count);
}


// function solve(text, word) {
//     if (typeof text !== 'string' || typeof word !== 'string') {
//         console.log('Invalid input');
//         return;
//     }
    
//     const regex = new RegExp(`\\b${word}\\b`, 'gi');
//     const matches = text.match(regex);
//     console.log(matches ? matches.length : 0);
// }

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');