 // alert('it works');
function calc() {
   // select 2 input fileds
   let input1 = document.getElementById('num1');
   let input2 = document.getElementById('num2');

   // read value
    let a = Number(input1.value);
    let b = Number(input2.value);
   
    // calculate sum
    let sum = a + b;

   // select output field
   let output = document.getElementById('sum');

   // pring result
   output.value = sum;
}