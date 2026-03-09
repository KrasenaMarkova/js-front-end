function solve (text, word) {
   let result = text.replaceAll(word, '*'.repeat(word.length));

//    while(text.includes(word)) {
//     text = text.replace(word, '*'.repeat(word.length));
//    }
//      console.log(text);

    console.log(result);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');