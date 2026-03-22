document.addEventListener('DOMContentLoaded', solve);

function solve() {
   // add event listener to submit button
   let submitBtn = document.querySelector('input[type="submit"]');
   submitBtn.addEventListener('click', addContent);

   function addContent(ev) {
      // prevent form submission
      ev.preventDefault();

      // find input element and read value
      let data = document.querySelector('input[type="text"]').value;
      // parse value to array
      let sections = data.split(', ');

      let content = document.getElementById('content');

      // for every string of array
      for (let entry of sections) {
         // - create div
         let div = document.createElement('div');
         // - create paragraph
         let p = document.createElement('p');
         // - set paragraph content
         p.textContent = entry
         div.appendChild(p);
         // - append to div and append div to output
         content.appendChild(div);
      }
   }

}



// function solve() {
//    const form = document.getElementById("task-input");
//    const contentDiv = document.getElementById("content");

//    form.addEventListener("submit", function (event) {
//        event.preventDefault(); // Prevent form from refreshing the page

//        // Get input value and split it into an array of section names
//        const input = form.querySelector("input[type='text']").value;
//        const sections = input.split(",").map(section => section.trim());

//        // Clear previous content
//        contentDiv.innerHTML = "";

//        // Create and append divs for each section
//        sections.forEach(section => {
//            const sectionDiv = document.createElement("div");
//            const paragraph = document.createElement("p");
//            paragraph.textContent = section;
//            sectionDiv.appendChild(paragraph);
//            contentDiv.appendChild(sectionDiv);
//        });
//    });
// };