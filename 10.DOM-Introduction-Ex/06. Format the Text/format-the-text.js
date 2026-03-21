function solve() {
  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(s => s.trim() !== '');
  let result = [];

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphSentences = sentences.slice(i, i + 3).map(s => s.trim() + '.').join(' ');
   // създаваме HTML за параграфа
    let paragraph = `<p>${paragraphSentences}<p>`;
    // вкарваме новият параграф в масива
    result.push(paragraph);
  }

  document.getElementById('output').innerHTML = result.join('\n');
}

