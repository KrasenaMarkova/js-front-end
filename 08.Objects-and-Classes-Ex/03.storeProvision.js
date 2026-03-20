// function solve (initial, orders) {
//     let stock = new Map();

//     // обхождаме първият масив
//     for (let i = 0; i < initial.length; i += 2) {
//         let key = initial[i];
//         let value = Number(initial[i + 1]);

//         stock.set(key, value);
//     }

//     // обхождаме вторият масив
//     for (let i = 0; i < orders.length; i += 2) {
//         let key = orders[i];
//         let value = Number(orders[i + 1]);

//         // ако този продукт не съществува
//         if (!stock.has(key)) {
//             stock.set(key, 0);
//         } 

//         // вземаме текущата стойност ако тя вече съществува
//         let current = stock.get(key);
//         // презаписваме текущата стойност + новата
//         stock.set(key, current + value);
//     }

//     for (let [key, value] of stock) {
//         console.log(`${key} -> ${value}`);
//     }
// }

function solve (stocks, products) {
    let map = new Map();

    function processStockList(list) {
        for (let i = 0; i < list.length; i += 2) {
            let name = list[i];
            let quantity = Number(list[i + 1]);

            map.set(name, (map.get(name) || 0) + quantity);
        }
    }

    processStockList(stocks);
    processStockList(products);

    for (let [name, quantity] of map) {
        console.log(`${name} -> ${quantity}`);
    }
}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);