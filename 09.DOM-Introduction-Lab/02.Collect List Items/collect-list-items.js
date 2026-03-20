function extractText() {
   // Find all list items
   let list = document.getElementById('items');
   let items = list.children;

   let result = [];

   // Read text content of each list item
    for (let li of items) {
        // Accumulate text
        result.push(li.textContent);
    }
  
   // Find output element
    let output = document.getElementById('result');

   // Set result in output element
   output.value = result.join('\n');
}