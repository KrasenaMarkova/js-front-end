function toggle() {
    
    let content = document.getElementById('extra');
    let btn = document.querySelector('.button');

    if (btn.textContent == 'More') {
        // Toggle ON
        // визуализираме текста
        content.style.display = 'block';
        // променяме изписаното на бутона при визуализиране на целият текст
        btn.textContent = 'Less';
    } else {
        // Toggle OFF
        content.style.display = 'none';
        btn.textContent = 'More';
    }
}