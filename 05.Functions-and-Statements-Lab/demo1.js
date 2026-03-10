function solve () {
    let myNum = 5;
    innerFunc();
}

function innerFunc () {
    let innerNum = 10;
    console.log(myNum);
}

solve();
innerFunc();