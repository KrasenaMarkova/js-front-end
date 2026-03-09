function solve(arr, rotations) {

    for(let i = 0; i < rotations; i++) {
    // ще изтрием първата стойност от масива
    let element = arr.shift();
    //изтритата стойност ще се върне обратно в края на масива
    arr.push(element);


    // това обединява горните 2 реда
    // arr.push(arr.shift());
    }
    console.log(arr.join(' '));
}

// Вариант 2
// function solve(arr, rotations) {
//     for(let i = 0; i < rotations % arr.lenght; i++) {
//         arr.push(arr.shift());
//     }
//     console.log(arr.join(' '));
// }

//Вариант 3
// function solve(arr, rotations) {
//     let result = [];
//     let startIndex = rotations % arr.lenght;

//     for(let i = startIndex; i < arr.lenght; i++) {
       
//        arr.push(arr[i]);
//     }

//     for(let i = 0; i < startIndex; i++) {
       
//         result.push(arr[i]);
//      }

//      console.log(result.join(' '));
//  }
    

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);