function solve (p, q) {
    let cache = new Map();

    function fact(n) {
        if (n == 1) {
            return 1;
        }

        if (cache.has(n)) {
            return cache.get(n);
        }

        let value = n * fact(n - 1);
        cache.set(n, value);
        return value;
    }

    console.log(fact(p) / fact(q));
}


solve(5, 2);
solve(6, 2);