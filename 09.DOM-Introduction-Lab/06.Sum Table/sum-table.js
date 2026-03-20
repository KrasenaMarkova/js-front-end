function sumTable() {
    // select all rows in the tbody
    let rows = Array.from(document.querySelectorAll('table tr'));
    // махаме първият ред
    rows.shift();

    // last row is the output element
    let output = rows.pop();
    let sum = 0;

    // for each of the other rows, find the last column
    for (let row of rows) {
        let col = row.children[row.children.length - 1];

        // parse the value as number and add it to the sum
        sum += Number(col.textContent);
    }
    
    // output result in the last column of the last row
    let outputCol = output.children[output.children.length - 1];
    outputCol.textContent = sum;
}