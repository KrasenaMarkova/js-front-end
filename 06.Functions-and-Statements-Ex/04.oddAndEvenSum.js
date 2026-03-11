function solve (num) {
    // за да може да обходим всяка една цифра в числото, което ни е подадено, го превръщаме в string
    let numAsString = num.toString();

    let evenSum = 0;
    let oddSum = 0;

    for (let digit of numAsString) {
        digit = Number(digit);
        if (digit % 2 == 0) {
            evenSum += digit
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// function solve(number) {
//     let numStr = Math.abs(number).toString(); // Convert number to string and handle negative values
//     let evenSum = 0, oddSum = 0;
    
//     for (let digit of numStr) {
//         let num = parseInt(digit);
//         if (num % 2 === 0) {
//             evenSum += num;
//         } else {
//             oddSum += num;
//         }
//     }
    
//     return { evenSum, oddSum };
// }

solve(1000435);
solve(3495892137259234);