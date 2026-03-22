document.addEventListener('DOMContentLoaded', solve);

 // - find column parent -> product row
   // - find price column -> class "product-line-price"
   
   // - read textContent and save name

   // attach event listener to checkput button
   // on click
function solve() {
   let cart = {};

   let output = document.querySelector('textarea');
   output.value = '';

    // attach event listeners to buttons
    let buyBtns = document.querySelectorAll('.add-product');

   // on click
   for (let btn of buyBtns) {
      btn.addEventListener('click', onBuyClick);
   }

  

   let checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', onCheckout);

   function onBuyClick(event) {
      // - find button parent -> column
      let productRow = event.target.parentElement.parentElement;

      // - read name column -> class "product-title"
      let name = productRow.querySelector('.product-title').textContent;

      // - read textContent and convert to number
      let price = Number(productRow.querySelector('.product-line-price').textContent);
   
      // - find output text area and append result string
      output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
   
     if (!cart.hasOwnProperty(name)) {
      cart[name] = 0;
     }

     cart[name] += price;
   }

   function onCheckout() {
      let sum = 0;

      // - summarize all products in cart
      for (let price of Object.values(cart)) {
         sum += price;
      }

      // - find output text area and print result
      let result = `You bought ${Object.keys(cart).join(', ')} for ${sum.toFixed(2)}.`;
      output.value += result;

      checkoutBtn.removeEventListener('click', onCheckout);
   }

}
