function solve (wordsAsString, text) {
    // parse words string to create an array of words
    const words = wordsAsString.split(', ');

    // create temporaty variables with *-strings of same length as words
    // parse input text to create tokens
    let tokens = text.split(' ');

    // iterate text tokens and compare to *-strings
    // -if there is match, replace current token with word
    for (let word of words) {

         // превръщаме думата в *-ки спримо дължината на думата
         let stars = '*'.repeat(word.length);

        for (let i = 0; i < tokens.length; i++){
       
            if (tokens[i] == stars) {
                tokens[i] = word;
            // ако сме намерили думата няма смисъл да проверяваме останалите думи в изречението
                break;
            }
        }
    }
    console.log(tokens.join(' '));
}


// function solve (template, text) {
//     let words = template.split(', ');

//     for (let word of words) {
//         text = text.replace('*'.repeat(word.length), word);
//     }
//     console.log(text);
// }


solve('great',
'softuni is ***** place for learning new programming languages');
solve('great, learning',
'softuni is ***** place for ******** new programming languages');