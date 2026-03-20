function solve (sentence) {
    let words = sentence.toLowerCase().split(' ');
    let wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    let result = Object.keys(wordCount).filter(word => wordCount[word] % 2 !== 0);

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');