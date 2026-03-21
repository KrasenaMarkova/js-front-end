function solve() {
   // select elements: table rows, input field, output field
   let rows = document.querySelectorAll('.container tbody tr');
   let input = document.getElementById('searchField');

   // read input pattern
   let pattern = input.value;
   
   if (!pattern) {
      return;
   }

   // check every row's text content
   for (let row of rows) {
      if (row.textContent.includes(pattern)) {
         // - if there is a match, apply 'selected' class
         row.classList.add('select')
      } else {
          // - otherwise, remove the class
         row.classList.remove('select');
      }
   }
   
   // clear input field
   input.value = '';
}