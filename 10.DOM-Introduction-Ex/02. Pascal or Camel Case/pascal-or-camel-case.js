function solve() {
  let textInput = document.getElementById('text');
  let commandInput = document.getElementById('naming-convention');

  // правим всички букви малки
  let text = textInput.value.toLocaleLowerCase();
  // за да съхраняваме в масив всички елементи
  let tokens = text.split(' ');

  let command = commandInput.value;

  let output = document.getElementById('result');

  if (command != 'Pascal Case' && command != 'Camel Case') {
    output.textContent = 'Error!';
    return;
  }

  let startIndex = command == 'Pascal Case' ? 0 : 1;

  for (let i = startIndex; i < tokens.length; i++) {
    // текущата дума
    let word = tokens[i];
    
    //word[0].toLocaleUppersace() - правим първата буква главна
    //  word.slive(1) - всички букви след първата малки
    word = word[0].toLocaleUpperCase() + word.slice(1);
    
    // добавяме думата към масива
    tokens[i] = word;
  }

  output.textContent = tokens.join('');
}