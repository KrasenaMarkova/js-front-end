function sum(a, b) {
    alert(a + b);
}

function product (a, b) {
    alert(a * b);
}

function content(element) {
    element.textContent += 'This message comes from the Dom!';
}

function edit() {
    // взимаме полето
    let input = document.getElementById('message');
    // вадим неговото value в променлива
    let message = input.value;

    // взимаме референция към елемента
    let element = document.getElementById('title');
    element.textContent += message;
}

