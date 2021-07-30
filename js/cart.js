const cart = JSON.parse(localStorage.getItem("products"))

console.log(cart)

// affichage des produits du panier

// si panier vide" afficher panier vide"
if(cart === null){
    console.log("vide")
    const emptyCart = document.createElement("p")
    emptyCart.innerText= "Le panier est vide"
    const boxCart = document.getElementById("box-cart")
    boxCart.appendChild(emptyCart)
}
else{

    for(products of cart){

    const tableBody = document.getElementById("box-cart")
    const tableCart = document.createElement("tr")  
    tableBody.appendChild(tableCart)

    const arrayPhoto = document.createElement("td")
    const imageCart = document.createElement("img")
   
    arrayPhoto.appendChild(imageCart)
    tableCart.appendChild(arrayPhoto)
    imageCart.className="img-thumbnail"
    imageCart.src=products.photoProduct
    imageCart.href= products.linkProduct

    const nameCart = document.createElement("td")
    const nameProduct = document.createElement("h2")
    tableCart.appendChild(nameCart)
    nameCart.appendChild(nameProduct)
    nameProduct.innerHTML=products.nameProduct

    const optionCart = document.createElement("td")
    const optionProduct = document.createElement("h2")
    tableCart.appendChild(optionCart)
    optionCart.appendChild(optionProduct)
    optionProduct.innerHTML=products.option

    const priceCart = document.createElement("td")
    const priceProduct = document.createElement("h2")
    tableCart.appendChild(priceCart)
    priceCart.appendChild(priceProduct)
    priceProduct.innerHTML=products.priceProduct

    const tableColumneCart = document.createElement("td")
    const buttonDelete = document.createElement("button")
    buttonDelete.className= "fa fa-trash"
    
    const idproductsel =products.idProductSelectionner
    tableColumneCart.dataset.idproduct = idproductsel


  // transformation en JSON et envoie dans la KEY "idproduct" pour chaque produit dans le local storage et convertir en JSON  
   // localStorage.setItem(idproductsel, JSON.stringify(products))
    tableColumneCart.appendChild(buttonDelete)
    tableCart.appendChild(tableColumneCart)
    tableCart.className=idproductsel  

    // ecouter bouton SUPPRIMER
    buttonDelete.addEventListener("click", (event)=>{
    event.preventDefault()

    /*const deleteProduct =  document.querySelector("tr:nth-child(idproductsel)")
    console.log(deleteProduct)
    tableCart.removeChild()

    localStorage.removeItem(idproductsel)
    alert("supprimer"+idproductsel)
    window.location.href = "cart.html"

    */
  })
  const totalCart = []
  for(products of cart){
  const priceProductCart = products.priceProduct

  totalCart.push(priceProductCart)
  }
  // la méthode reduce() permet d'accumuler les valeurs d'une liste
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const total = totalCart.reduce(reducer,0)
  const totalEuro = (new Intl.NumberFormat('fr-FR', {style:'currency', currency: 'EUR'}).format(total))
  const priceTotal = document.getElementById("price-total")
  priceTotal.innerHTML="Prix total= "+totalEuro

//vider le panier

const buttonDeleteAll = document.querySelector("#delete-all")

// ecouter bouton SUPPRIMER tout
   buttonDeleteAll.addEventListener("click", (event)=>{
    event.preventDefault()
    localStorage.clear("products")
    alert("Le panier a été vidé")
    window.location.href = "cart.html"

    })
    }
    // Formulaire
    const sendForm = document.querySelector("#send-form")
    sendForm.addEventListener("click", (event)=>{
    event.preventDefault()
    localStorage.setItem("name", document.querySelector("#name").value)
    localStorage.setItem("mail", document.querySelector("#mail").value)
    localStorage.setItem("adress", document.querySelector("#adress").value)
    localStorage.setItem("tel", document.querySelector("#tel").value)
    console.log(sendForm)
    // mettre les valeurs du formulaire dans un objet
    const dataForm = {
      name: localStorage.getItem("name"),
      mail: localStorage.getItem("mail"),
      adress: localStorage.getItem("adress"),
      tel: localStorage.getItem("tel"),
    }
    console.log(dataForm)
     })
  
}


  