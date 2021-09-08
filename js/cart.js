const cart = JSON.parse(localStorage.getItem("products"));

// affichage des produits du panier
console.log(cart);
// si panier vide" afficher panier vide"
if (cart === null) {
  console.log("vide");
  const boxCart = document.getElementById("box-cart");
  const emptyCart = document.createElement("p");
  boxCart.appendChild(emptyCart);
  emptyCart.innerText = "Le panier est vide";
} else {
  for (product of cart) {
    console.log("pas vide");
    const tableBody = document.getElementById("box-cart");
    const tableCart = document.createElement("tr");
    tableBody.appendChild(tableCart);

    const arrayPhoto = document.createElement("td");
    const imageCart = document.createElement("img");
    arrayPhoto.appendChild(imageCart);
    tableCart.appendChild(arrayPhoto);
    imageCart.className = "img-thumbnail";
    imageCart.src = product.photoProduct;
    const thumbnailLink = document.createElement("a");
    arrayPhoto.appendChild(thumbnailLink);
    thumbnailLink.appendChild(imageCart);
    thumbnailLink.href = product.linkProduct;

    const nameCart = document.createElement("td");
    const nameProduct = document.createElement("h2");
    tableCart.appendChild(nameCart);
    nameCart.appendChild(nameProduct);
    nameProduct.innerHTML = product.nameProduct;

    const optionCart = document.createElement("td");
    const optionProduct = document.createElement("h2");
    tableCart.appendChild(optionCart);
    optionCart.appendChild(optionProduct);
    optionProduct.innerHTML = product.option;

    const priceCart = document.createElement("td");
    const priceProduct = document.createElement("h2");
    tableCart.appendChild(priceCart);
    priceCart.appendChild(priceProduct);
    const priceProductEuro = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(product.priceProduct);
    priceProduct.innerHTML = priceProductEuro;

    const tableColumneCart = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.className = "fa fa-trash";
    tableColumneCart.appendChild(buttonDelete);
    tableCart.appendChild(tableColumneCart);

    const idProductSelect = product.idProduct;
    const optionProductSelect = product.option;

    //somme total du panier en euros
    const totalCart = [];
    for (product of cart) {
      const priceProductCart = product.priceProduct;
      totalCart.push(priceProductCart);
      // la méthode reduce() permet d'accumuler les valeurs d'une liste
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const total = totalCart.reduce(reducer, 0);
      const totalEuro = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(total);
      const priceTotal = document.getElementById("price-total");
      priceTotal.innerHTML = "Prix total= " + totalEuro;
    }

    //supprimer un produit du panier
    const deleteCart = () => {
      const idProductDelete = (element) =>
        element.idProduct === idProductSelect &&
        element.option === optionProductSelect;
      const optionProductDelete = (element) =>
        element.option === optionProductSelect;
      const indexProduct = cart.findIndex(
        idProductDelete && optionProductDelete
      );
      cart.splice(indexProduct, 1);
      localStorage.setItem("products", JSON.stringify(cart));
    };
    // ecouter bouton SUPPRIMER
    buttonDelete.addEventListener("click", (event) => {
      event.preventDefault();
      deleteCart();
      window.location.href = "cart.html";
    });
  }

  //vider le panier
  const buttonDelete = document.getElementById("delete-cart");
  const buttondeleteCart = document.createElement("button");
  buttondeleteCart.id = "delete-all";
  buttondeleteCart.type = "click";
  buttondeleteCart.className = "sendform";
  buttonDelete.appendChild(buttondeleteCart);
  buttondeleteCart.innerHTML = "Vider le panier";

  // ecouter bouton SUPPRIMER tout
  buttondeleteCart.addEventListener("click", (event) => {
    event.preventDefault();
    deleteCart();
    alert("Le panier a été vidé");
    window.location.href = "cart.html";
  });
  //supprimer tous les produits du panier
  const deleteCart = () => {
    localStorage.clear("product");
  };

  // Formulaire
  const buttonSend = document.getElementById("send-form");
  const buttonSendForm = document.createElement("button");
  buttonSendForm.id = "send";
  buttonSendForm.type = "submit";
  buttonSendForm.className = "sendform";
  buttonSend.appendChild(buttonSendForm);
  buttonSendForm.innerHTML = "Confirmation de la commande";

  // Test présence et validité des valeurs du formulaire avant envoie des données produits et contact au backend
  (function () {
    "use strict";
    const form = document.getElementById("form-data");
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
          console.log(form.checkValidity());
        } else {
          createOrder(cart);
        }
        form.classList.add("was-validated");
      },
      false
    );

    // Récupération des données produits et contact du panier et envoie au backend
    const createOrder = (cart) => {
      // mettre les produits du panier dans un tableau products
      const products = [];
      for (product of cart) {
        products.push(product.idProduct);
        console.log(products);
      }
      // mettre les valeurs du formulaire dans un objet contact
      const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#adress").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#mail").value,
      };
      console.log(contact);
      const total = document.querySelector("#price-total").outerText;

      // envoie au backend
      fetch("http://localhost:3000/api/cameras/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products, contact }),
      })
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then(function (value) {
          console.log(value);
          localStorage.setItem("order", JSON.stringify(value));
          window.location.href = "confirmation.html";
        })
        .catch(function (err) {
          console.log(err);
          // Une erreur est survenue
          alert("node server hors service");
        });
      deleteCart();
    };
  })();
}
