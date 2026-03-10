function solve (numOne, numTwo, operator) {
    const operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
    
    // let action = operations[operator];
    // console.log(action(numOne, numTwo));

    console.log(operations[operator](numOne, numTwo));
};

solve(5,
    5,
    'multiply'
    );
solve(40,
    8,
    'divide'
    );
solve(12,
    19,
    'add'
    );
solve(50,
    13,
    'subtract'
    );