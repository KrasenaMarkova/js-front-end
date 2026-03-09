function solve(n, inputArr) {
    // вземаме в нов масив необходимите елементи
    let myArr = inputArr.slice(0, n);

    // обръщаме подредбата
    let reverse = myArr.reverse();

    // горните 2 операции могат и в една да се направят
    // let myArr = inputArr.slice(0, n).reverse();

    // превърщаме в стринг масива и слагаме интервал за разделител между елементите
    let asString = reverse.join(' ');

    // горните 3 операции могат и в една да се направят
    // let myArr = inputArr.slice(0, n).reverse().join(' ');

    console.log(asString);

     // цялата задача може да се реши в един ред
     // console.log(inputArr.slice(0, n).reverse().join(' '));
}

// let solve = (n, inputArr) => inputArr.slice(0, n).reverse().join(' ')
// console.log(solve(3, [10, 20, 30, 40, 50]));
// console.log(solve(4, [-1, 20, 99, 5]));
// console.log(2, [66, 43, 75, 89, 47]);


solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);