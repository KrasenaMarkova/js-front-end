// function solve (typeOfDay, age) {
//     let price;
    
//     if(age >= 0 && age <= 18) {
//         switch (typeOfDay) {
//             case 'Weekday': price = 12; break;
//             case 'Weekend': price = 15; break;
//             case 'Holiday': price = 15; break;
//         }
//         console.log(price + '$');
//     } else  if(age <= 64 && age > 18) {
//         switch (typeOfDay) {
//             case 'Weekday': price = 18; break;
//             case 'Weekend': price = 20; break;
//             case 'Holiday': price = 12; break;
//         }
//         console.log(price + '$');
//     } if(age > 64 && age <= 122) {
//         switch (typeOfDay) {
//             case 'Weekday': price = 12; break;
//             case 'Weekend': price = 15; break;
//             case 'Holiday': price = 10; break;
//         }
//         console.log(price + '$');
//     } else if (0 > age || age > 122) {
//         console.log("Error!");
//     }
// }

function solve (typeOfDay, age) {
    let price;
    
    if(age >= 0 && age <= 18 && typeOfDay == 'Weekday') {
        price = 12;
        console.log(price + '$');
    } else  if(age >= 0 && age <= 18 && typeOfDay == 'Weekend') {
        price = 15;
        console.log(price + '$');
    }  else  if(age >= 0 && age <= 18 && typeOfDay == 'Holiday') {
        price = 5;
        console.log(price + '$');
    } else  if(age <= 64 && age > 18 && typeOfDay == 'Weekday') {
        price = 18;
        console.log(price + '$');
    } else  if(age <= 64 && age > 18 && typeOfDay == 'Weekend') {
       price = 20;
       console.log(price + '$');
    } else  if(age <= 64 && age > 18 && typeOfDay == 'Holiday') {
        price = 12;
        console.log(price + '$');
    } else if(age > 64 && age <= 122 && typeOfDay == 'Weekday') {
        price = 12;
        console.log(price + '$');
    } else if(age > 64 && age <= 122 && typeOfDay == 'Weekend') {
        price = 15;
        console.log(price + '$');
    } else if(age > 64 && age <= 122 && typeOfDay == 'Holiday') {
        price = 10;
        console.log(price + '$');
    } else if (age < 0 || age > 122) {
        price = "Error!";
        console.log(price );
    }
}


solve('Weekday', 42);
solve('Holiday', -12);
solve('Holiday', 15);