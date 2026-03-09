function solve (arr) {
    arr.sort((a, b) => a.localeCompare(b));

    for (let i =0; i < arr.length; i++) {
        console.log(`${i+1}.${arr[i]}`);
    }

    console.log();
}

// function solve (arr) {
//     let result = arr.sort((a, b) => a.localeCompare(b))
//             .map((name, index) => `${index + 1}.${name}`);

//     console.log(result.join("\n"));
// }


solve(["John", "Bob", "Christina", "Ema"]);