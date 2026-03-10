function solve (product, quantity) {
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };

    let totalPrice = prices[product] * quantity;
    
    console.log(totalPrice.toFixed(2));
}

solve("water", 5);
solve("coffee", 2);