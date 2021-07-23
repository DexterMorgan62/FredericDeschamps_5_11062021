const cart = JSON.parse(localStorage.getItem("products"))

console.log(cart)

// affichage des produits du panier

// si panier vide" afficher panier vide"
if(cart === null){
    console.log("vide")
    const emptyCart = document.createElement("p")
    emptyCart.innerText= "Le panier est vide"
    boxCart.appendChild(emptyCart)
}
else{

    for(products of cart){

    const tableBody = document.getElementById("cart")
    const tableCart = document.createElement("tr")  
    tableBody.appendChild(tableCart)

    const arrayPhoto = document.createElement("td")
    const imageCart = document.createElement("img")
   
    arrayPhoto.appendChild(imageCart)
    tableCart.appendChild(arrayPhoto)
    imageCart.src=products.photoProduct
    imageCart.href= products.linkProduct

    const nameCart = document.createElement("td")
    tableCart.appendChild(nameCart)
    nameCart.innerHTML=products.nameProduct

    const optionCart = document.createElement("td")
    tableCart.appendChild(optionCart)
    optionCart.innerHTML=products.option

    const priceCart = document.createElement("td")
    tableCart.appendChild(priceCart)
    priceCart.innerHTML=products.priceProduct

    const deleteCart = document.createElement("td")
    const buttonDelete = document.createElement("button")
    buttonDelete.className= "fa fa-trash"
    deleteCart.appendChild(buttonDelete)
    tableCart.appendChild(deleteCart)

    // ecouter bouton SUPPRIMER
    deleteCart.addEventListener("click", (event)=>{
    event.preventDefault()
    localStorage.removeItem("idProductSelectionner")
      

  })
  }
}


  