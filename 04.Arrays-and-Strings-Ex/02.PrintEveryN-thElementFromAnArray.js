function solve (arr, step){
    let result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result;
}

// доста бавен вариант за изпълнение
// function solve (arr, step){
//     return arr.filter((e, i) => i % step ==0);
// }

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['dsa','asd', 'test', 'tset'], 2));
console.log(solve(['1', '2', '3', '4', '5'], 6));