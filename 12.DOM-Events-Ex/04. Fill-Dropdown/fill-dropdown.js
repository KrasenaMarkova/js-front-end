document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // add event listener to submit button
   document.querySelector('[type="submit"]').addEventListener('click', addOption);

    function addOption(ev) {
        // prevent default behaviour
        ev.preventDefault();
        
        // read input values
        let text = document.getElementById('newItemText').value;
        let value = document.getElementById('newItemValue').value;

        // create <option> element and set its value and content
        let option = document.createElement('option');
        option.textContent = text;
        option.value = value;

         // append option to menu
         document.getElementById('menu').appendChild(option);

        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    }
}