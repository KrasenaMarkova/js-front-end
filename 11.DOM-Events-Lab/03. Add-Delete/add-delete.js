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

      let deleteBtn = document.createElement('a');
      deleteBtn.href = '#';
      deleteBtn.textContent = '[Delete]';
      deleteBtn.addEventListener('click',  onDelete);

      newLi.appendChild(deleteBtn);
  
      // find list
      let list = document.getElementById('items');
      // add new list item to list
      list.appendChild(newLi);
  
      input.value = '';

      function onDelete(e) {
        let item = e.target.parentElement;
        item.remove();
      }
}
