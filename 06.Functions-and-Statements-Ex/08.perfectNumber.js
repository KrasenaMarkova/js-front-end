function solve (num) {
    // find all divisord
    let divisors = [1];

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            divisors.push(i);
        }
    }
    // calc sum
    let sum = 0;

    for (let n of divisors) {
        sum += n;
    }

    // make comparison
    if (sum == num) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}

solve(6);
solve(28);
solve(1236498);