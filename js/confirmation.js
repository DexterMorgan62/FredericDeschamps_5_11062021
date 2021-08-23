const confirmationData = JSON.parse(localStorage.getItem("order"));

const confirmationNameContact = [];
for (dataContact of Object.values(confirmationData.contact)) {
  confirmationNameContact.push(dataContact);
const title = document.getElementById("title");
const textTitle = document.createElement("p");
title.appendChild(textTitle);
textTitle.className = "lead";

title.innerHTML =
  "Merci Mr " + confirmationNameContact[0]+ " d'avoir effectué cette commande";

}
const confirmationContact = [];
for (dataContact of Object.values(confirmationData.contact)) {
  confirmationContact.push(dataContact);


  const tableBody = document.getElementById("box-cart");
  const tableCart = document.createElement("tr");
  tableBody.appendChild(tableCart);

  const nameCart = document.createElement("td");
  const nameProduct = document.createElement("h2");
  tableCart.appendChild(nameCart);
  nameCart.appendChild(nameProduct);
  nameProduct.innerHTML = dataContact;
  console.log(confirmationContact)
}

const confirmationProducts = [];
for (dataProducts of Object.values(confirmationData.products)) {
  confirmationProducts.push(dataProducts);

  const tableBody = document.getElementById("box-cart");
  const tableCart = document.createElement("tr");
  tableBody.appendChild(tableCart);

  const arrayPhoto = document.createElement("td");
  const imageCart = document.createElement("img");

  const nameCart = document.createElement("td");
  const nameProduct = document.createElement("h2");
  tableCart.appendChild(nameCart);
  nameCart.appendChild(nameProduct);

  const priceEuro = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(dataProducts.price / 100);
  //const total = priceEuro.reduce(reducer, 0);
  nameProduct.innerHTML =
    dataProducts.name + " " + dataProducts.lenses + " " + priceEuro;
  console.log(dataContact);
  console.log(dataProducts);
}
console.log(confirmationContact);

const totalCart = [];

for (dataProducts of Object.values(confirmationData.products)) {
  totalCart.push(dataProducts.price);
  // la méthode reduce() permet d'accumuler les valeurs d'une liste
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const total = totalCart.reduce(reducer, 0);
  const totalEuro = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(total / 100);
  const priceTotal = document.getElementById("price-total");
  priceTotal.innerHTML = "Prix total= " + totalEuro;
  console.log(total);
  console.log(totalEuro);
}
