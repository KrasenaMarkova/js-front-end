// function solve (nums) {
//     for (let num of nums) {
//         let numAsString = num.toString();
//         let isPalindrome = true;

//         for (let i = 0; i < (numAsString.length - 1) / 2; i++) {
//             if (numAsString[i] != numAsString[numAsString.length - i - 1]) {
//                 isPalindrome = false;
//                 break;
//             }
//         }

//         console.log(isPalindrome);
//     }
// }

function solve (array) {
    let str = array.toString();
    let newArr = str.split(',');

        for (let i = 0; i < newArr.length; i++) {
            let currentNum = newArr[i];
            let result = currentNum.toString().split('').reverse().join('');
           
            if (currentNum == result) {
                console.log(true);
            } else {
                console.log(false);
            }
        }
}


solve([123,323,421,121]);
solve([32,2,232,1010]);