function solve() {
    // iterate all input checkboxes
    let selected = new Map();
    let headers = document.querySelectorAll('thead [type = "checkbox"]');
    // - if it's checked, record its index and name attribute

    for (let i = 0; i <headers.length; i++) {
        if (headers[i].checked) {
            selected.set(i, headers[i].name);
        }
    }

    // for every row of the table body
    let rows = document.querySelectorAll('tbody tr');

    let result = [];

    for (let row of rows) {
        let record = {};

        // - filter only the columns wholeindexes have been recorded as checked
        for (let i = 0; i < row.children.length; i++) {
            if (selected.has(i)) {
                 // - create an object using the name of the column header and the content if the current
 
                let propName = selected.get(i);
                let col = row.children[i];
                record[propName] = col.textContent;
            }
        }
    // - store in an array
        result.push(record);
    }
    // output the result as a JSON string
   let output = document.getElementById('output');
   output.value = JSON.stringify(result);
}