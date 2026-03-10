function solve (grade) {
    if (grade < 3.00) {
        console.log(`Fail (2)`);
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

// function solve(grade) {
//     let description;
//     if (grade < 3.00) {
//         description = "Fail";
//     } else if (grade >= 3.00 && grade < 3.50) {
//         description = "Poor";
//     } else if (grade >= 3.50 && grade < 4.50) {
//         description = "Good";
//     } else if (grade >= 4.50 && grade < 5.50) {
//         description = "Very good";
//     } else {
//         description = "Excellent";
//     }
//     console.log(`${description} (${grade < 3.00 ? Math.floor(grade) : grade.toFixed(2)})`);
// }

solve (3.33);
solve (4.50);
solve (2.99);