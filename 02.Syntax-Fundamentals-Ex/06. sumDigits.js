function solve (num) {
    let sum = 0;

    while (num > 0) {
        let number = num % 10;
        sum += number;
        num = parseInt(num / 10);
    }

    console.log(sum);
}


// function solve (num) {
//     let sum = 0;

//     while (num != 0) {
//         sum += num / 2;
//         num = Math.floor(num / 10);
//     }

//     console.log(sum);
// }


solve(245678);
solve(97561);
solve(543);