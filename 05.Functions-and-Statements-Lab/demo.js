// let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNumbers = myArr.filter(x => x % 2);
// console.log(oddNumbers);


let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNumbers = myArr.filter(oddValues);
console.log(oddNumbers);

function oddValues (number) {
    return Boolean (number % 2);
}



function add(a, b) {
    return a + b;
}

function createIncrementer (step) {
    return function (a) {
        return add (a, step);
    }
}

let myIncrementer = createIncrementer(5);
console.log(myIncrementer(2));