function solve (num1, num2) {
    let row = "";
    let count = 0;

    for (let i = num1; i <= num2; i++) {
        count += i;
        if (i == num2) {
            row += i;
        } else {
            row += i + " ";
        }
    }
    console.log(row);
    console.log('Sum:', count);
}

solve(5, 10);
solve(0, 26);
