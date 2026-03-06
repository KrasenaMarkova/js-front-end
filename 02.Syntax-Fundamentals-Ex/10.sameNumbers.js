function solve (num) {
    let sum = 0;
    let same = true;

    let asString = num.toString();
    let first = asString[0];

    for(let char of asString) {
        sum += Number(char);

        if (char != first) {
            same = false;
        }
    }

    console.log(same);
    console.log(sum);
}

// function checkSameDigits(number) {
//     let numStr = number.toString(); // Convert number to string
//     let firstDigit = numStr[0]; // Get the first digit
//     let sum = 0;
//     let allSame = true;

//     for (let digit of numStr) {
//         sum += Number(digit); // Sum up the digits
//         if (digit !== firstDigit) {
//             allSame = false; // Check if all digits are the same
//         }
//     }

//     console.log(allSame);
//     console.log(sum);
// }

solve(2222222);
solve(1234);
solve(2242);