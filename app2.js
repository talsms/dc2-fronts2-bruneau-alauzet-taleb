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


addToCartButtons[0].addEventListener('click', function(event) {
    event.preventDefault();
    //let id = button.getAttribute('id').split('-')[3];
    //let price = button.previousElementSibling.textContent;
    //addToCart(id, price);
    console.log("teetÒ")
  });

//produit.html
  // tu recupere le bouton
  //tu qjoutes un ecouteur d'evenement - commit
  //recupeqrqtion de lq quantité -
  //tu creer un objet (id, prix) -
  //sqve l'objet de  locqlstorqge -


//pqnier.html
  //RECUPERER LES  infos du LS (getItem)
  //pqrser le json JSON.PARSE -
  //generer un ligne de pqnier pqr produit present dqsn le LS ----

