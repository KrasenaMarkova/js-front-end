function solve (numOne, numTwo, numThree) {
    let negativeCount = 0;
    
    if (numOne < 0) negativeCount++;
    if (numTwo < 0) negativeCount++;
    if (numThree < 0) negativeCount++;
    
    // If the count of negative numbers is even, the product is positive
    if (negativeCount % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}


solve( 5, 12, -15);
solve(-6, -12, 14);
solve(-1, -2, -3);
solve(-5, 1, 1);