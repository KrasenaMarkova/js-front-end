function solve (n) {
    let numString = n.toString();
    let rowString = (numString + ' ').repeat(n).trim();

    for (let i = 0; i < n; i++) {
        console.log(rowString);
    }

}

solve(3);
solve(7);
solve(2);