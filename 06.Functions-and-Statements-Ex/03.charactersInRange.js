function solve (char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    if (start > end) {
        // Swap values if needed
        [start, end] = [end, start];
    }

    let result = [];

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(' '));
}

// function solve (a, b) {
//     let start = a.charCodeAt(0);
//     let end = b.charCodeAt(0);

//     let result = [];

//     for (let i = Math.min(start, end) + 1; i < Math.max(start, end); i++) {
//         result.push(String.fromCharCode(i));
//     }

//     console.log(result.join(' '));
// }

solve('a',
'd'
);
solve('#',
':'
);
solve('C',
'#'
);