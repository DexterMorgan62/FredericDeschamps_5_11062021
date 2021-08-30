const cart = JSON.parse(localStorage.getItem("products"));

// affichage des produits du panier

// si panier vide" afficher panier vide"
if (cart === null) {
  console.log("vide");
  const emptyCart = document.createElement("p");
  emptyCart.innerText = "Le panier est vide";
  const boxCart = document.getElementById("box-cart");
  boxCart.appendChild(emptyCart);
} else {
  for (product of cart) {
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
    //cameraLink.href= 'product.html?id=' + camera._id

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
    priceProduct.innerHTML = product.priceProduct;

    const tableColumneCart = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.className = "fa fa-trash";
    tableColumneCart.appendChild(buttonDelete);
    tableCart.appendChild(tableColumneCart);

    // ecouter bouton SUPPRIMER
    buttonDelete.addEventListener("click", (event) => {
      event.preventDefault();
      deleteCart();
    });

    const idProductSelect = product.idProduct;
    const optionProductSelect = product.option;

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
      window.location.href = "cart.html";
    };
  }

  //vider le panier
  const buttonDeleteAll = document.querySelector("#delete-all");
  // ecouter bouton SUPPRIMER tout
  buttonDeleteAll.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.clear("product");
    alert("Le panier a été vidé");
    window.location.href = "cart.html";
  });

  // Formulaire
    
  const buttonSend = document.getElementById("send-form");
  const buttonSendForm = document.createElement("button");
  buttonSendForm.id = "send";
  buttonSendForm.type = "submit";
  buttonSendForm.className = "sendform";
  //buttonSendForm.style.visibility ="hidden";
  buttonSend.appendChild(buttonSendForm);
  buttonSendForm.innerHTML = "Confirmation de la commande";
    
  const sendForm = document.querySelector("#send-form");
  sendForm.addEventListener("click", (event) => {
    event.preventDefault();
    // mettre les valeurs du formulaire dans un objet
    const products = [];

    for (product of cart) {
      products.push(product.idProduct);
    }
    const contact = {
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value,
      address: document.querySelector("#adress").value,
      city: document.querySelector("#city").value,
      email: document.querySelector("#mail").value,
    };
    console.log(contact)
    const total = document.querySelector("#price-total").outerText;
    // fonction bouton caché si formulaire vide
    function visibilityButton() {
      document.getElementById(buttonSendForm).style.visibility = visible;
    }
    // envoie au backend

      if (contact == "") {
        buttonSendForm.style.visibility = "hidden";
      } else {
        buttonSendForm.style.visibility = "";
      

    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products, contact }),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
          console.log(res);
        }
      })

      .then(function (value) {
        console.log(value);

        localStorage.setItem("order", JSON.stringify(value));
      })
      .catch(function (err) {
        console.log(err);
        // Une erreur est survenue
        alert("node server hors service");
      });
    window.open("confirmation.html", "_blank");
      }
  });
}
