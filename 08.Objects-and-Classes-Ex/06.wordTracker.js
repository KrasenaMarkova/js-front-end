function solve (input) {
    let wordsToFind = input[0].split(' ');
    let wordsArr = input.slice(1);
    let wordCount = {};

    wordsToFind.forEach(word => wordCount[word] = 0);

    wordsArr.forEach(word => {
        if (wordCount.hasOwnProperty(word)) {
            wordCount[word]++;
        }
    });

    let sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, count]) => {
        console.log(`${word} - ${count}`);
    })
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);