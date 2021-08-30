const confirmationData = JSON.parse(localStorage.getItem("order"));

const confirmationNameContact = [];
for (dataContact of Object.values(confirmationData.contact)) {
  confirmationNameContact.push(dataContact);
const title = document.getElementById("title");
const textTitle = document.createElement("p");
title.appendChild(textTitle);
textTitle.className = "lead";

title.innerHTML =
  "Merci Mr " + confirmationNameContact[1]+ " d'avoir effectué cette commande";

}


const confirmationProducts = [];
for (dataProducts of Object.values(confirmationData.products)) {
  confirmationProducts.push(dataProducts);
  
  const tableBody = document.getElementById("box-cart");
  const boxProducts = document.createElement("thead");
  boxProducts.className = "box-products";
  tableBody.appendChild(boxProducts);
  const tableCart = document.createElement("tr");
  boxProducts.appendChild(tableCart);

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
const confirmationContact = [];
for (dataContact of Object.values(confirmationData.contact)) {
  confirmationContact.push(dataContact);


  const tableBody = document.getElementById("box-cart");
  const boxContact = document.createElement("thead");
  boxContact.className="box-contact";
  tableBody.appendChild(boxContact);
  const nameProduct = document.createElement("p");
  boxContact.appendChild(nameProduct);
  nameProduct.innerHTML = dataContact;
  console.log(confirmationContact)
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
