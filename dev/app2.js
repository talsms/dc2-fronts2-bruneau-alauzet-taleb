// Sélectionne le bouton "Ajouter au panier"
const addToCartButton = document.querySelector('.add-to-cart');

// Ajoute un écouteur d'événement pour le clic sur le bouton "Ajouter au panier"
addToCartButton.addEventListener('click', function() {
  // Sélectionne les informations du produit
  const productName = document.querySelector('h2').textContent;
  const productPrice = document.querySelector('p').textContent;

  // Crée un objet produit avec les informations sélectionnées
  const product = {
    name: productName,
    price: productPrice
  };

  // Récupère le panier depuis le stockage local (ou crée un nouveau panier s'il n'existe pas encore)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Ajoute le produit au panier
  cart.push(product);

  // Enregistre le panier dans le stockage local
  localStorage.setItem('cart', JSON.stringify(cart));
});
>QA ²1²1>a 