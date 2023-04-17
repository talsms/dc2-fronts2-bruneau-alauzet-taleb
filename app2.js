let cart = {};

function addToCart(id, price) {
  if (cart[id]) {
    cart[id].quantity++;
  } else {
    cart[id] = {
      quantity: 1,
      price: price
    };
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}
let addToCartButtons = document.querySelectorAll('.btn');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    let id = button.getAttribute('id').split('-')[3];
    let price = button.previousElementSibling.textContent;
    addToCart(id, price);
  });
});

