function solve (text) {
    
    let pattern = /^#([A-Za-z]+)$/;
    let tokens = text.split(' ');

   for (let token of tokens) {
        const match = token.match(pattern);
        if (match) {
            console.log(match[1]);
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');