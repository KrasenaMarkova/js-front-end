function solve (p, q) {
    let result = 1;

    if ( q < p) {
        for (let n = p; n > q; n--) {
            result *= n;
        }
    } else {
        for (let n = q; n > p; n--) {
            result /= n;
        }
    }

    console.log(result.toFixed(2));
}

// function solve(num1, num2) {
//     // Function to calculate factorial of a number
//     function factorial(n) {
//         if (n === 0 || n === 1) return 1;
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }

//     // Calculate factorials of the two numbers
//     const fact1 = factorial(num1);
//     const fact2 = factorial(num2);

//     // Perform the division
//     const result = fact1 / fact2;

//     // Print the result formatted to 2 decimal places
//     console.log(result.toFixed(2));
// }

solve(5, 2);
solve(6, 2);