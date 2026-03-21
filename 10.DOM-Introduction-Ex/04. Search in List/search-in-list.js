function solve() {
   // select elements of interest: list, input field, result field
   let list = document.getElementById('towns');
   let input = document.getElementById('searchText');
   let output = document.getElementById('result');

   // read input value
   let pattern = input.value;

   let matches = 0;

   // check every item of the list
   for (let row of list.children) {
      if (row.textContent.includes(pattern)) {
         // - if element matches the search, hidhlight it
         row.style.fontWeight = 'bold';
         row.style.textContent = 'underline';

         // - track number of matches
         matches++;
      } else {
         // - otherwise, remove highLIght
         row.style.fontWeight = '';
         row.style.textContent = '';
      }
   }

   // output number matches in result field
   output.textContent = `${matches} matches found`;
}