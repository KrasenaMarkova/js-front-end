function solve (a, b, c) {
    console.log(substract(sum(a, b), c));

    function sum (x, y) {
        return x +y;
    }

    function substract (p, q) {
        return p - q;
    }
}

solve(23,
    6,
    10
    );
solve(1,
    17,
    30
    );
solve(42,
    58,
    100
    );

