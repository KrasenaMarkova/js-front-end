function solve (arr) {
    arr.sort((a, b) => a - b);

    let result = [];

    while (arr.length) {
        if (result.length % 2 == 0) {
            result.push(arr.shift());
        } else {
            result.push(arr.pop());
        }
    }

    return result;
}

// function solve (arr) {
//     arr.sort((a, b) => a - b);
//     let result = [];
//     let left = true;
//     while (arr.length) {
//         if (left) {
//             result.push(arr.shift());
//         } else {
//             result.push(arr.pop());
//         }
//         left = !left;
//     }
//     return result;
// }

// function solve (arr) {
//     arr.sort((a, b) => a - b);
//     let result = [];
//     while (arr.length) {
//         result.push(arr.shift());
//         if (arr.length) {
//            result.push(arr.pop());
//         }
//     }
//     return result;
// }

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));