function addItem() {
    // find input field
    let input = document.getElementById('newItemText');

    // read value
    let text = input.value;

    // - if value is emtry +, do nothing
    if (!text) {
        return;
    }

    // create new list item
    let newLi = document.createElement('li');
    // set text content to value
    newLi.textContent = text;

    // find list
    let list = document.getElementById('items');

    // add new list item to list
    list.appendChild(newLi);

    input.value = '';
}
