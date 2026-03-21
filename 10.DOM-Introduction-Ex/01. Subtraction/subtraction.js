function subtract() {
    let field1 = document.getElementById('firstNumber');
    let field2 = document.getElementById('secondNumber');

    let a = Number(field1.value);
    let b = Number(field2.value);

    let result = a - b;
    
    let output = document.getElementById('result');
    output.textContent = result
}