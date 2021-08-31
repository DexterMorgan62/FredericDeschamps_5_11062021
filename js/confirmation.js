const confirmationData = JSON.parse(localStorage.getItem("order"));


const boxText = document.getElementById("box-cart");
const confirmationText = document.createElement("p");
boxText.appendChild(confirmationText);
confirmationText.className = "lead";


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

confirmationText.innerHTML =
  "Merci Mr " + confirmationData.contact.lastName + " d'avoir effectué cette commande<br/>"+ "N°"+confirmationData.orderId + "<br/> pour un montant total de "+totalEuro;
}


