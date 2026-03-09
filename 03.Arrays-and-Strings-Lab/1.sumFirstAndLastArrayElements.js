// по този начин показваме на функцията, че подаденият параметър е масив
/**
 * 
 * @param {number[]} arrNums 
 */


function solve (arrNums) {
    let first = arrNums[0];
    let last = arrNums[arrNums.length-1];

    console.log(first+last);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);