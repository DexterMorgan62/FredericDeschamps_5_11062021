const productSaveLocaleStorage = JSON.parse(localStorage.getItem("products"))

console.log(productSaveLocaleStorage)

// affichage des produits du panier
// selection de la classe ou injecter code HTML
const boxCart = document.getElementById("box-cart")

const productSummary = document.getElementById("product-summary")

// si pannier vide" afficher panier vide"
if(productSaveLocaleStorage === null){
    console.log("vide")
    const emptyCart = document.createElement("p")
    emptyCart.innerText= "Le panier est vide"
    boxCart.appendChild(emptyCart)
}
else{

    for(productSaveLocaleStorages of productSaveLocaleStorage){


    const arrayPhoto = document.getElementById("photo")
    const imageCart = document.createElement("img")
   
    arrayPhoto.appendChild(imageCart)
    imageCart.src=productSaveLocaleStorages.photoProduct
    imageCart.href= productSaveLocaleStorages.linkProduct

    const nameCart = document.getElementById("name")
    products.appendChild(nameCart)
    nameCart.innerHTML=productSaveLocaleStorages.nameProduct

    const optionCart = document.getElementById("option")
    products.appendChild(optionCart)
    optionCart.innerHTML=productSaveLocaleStorages.option

    const priceCart = document.getElementById("price")
    products.appendChild(priceCart)
    priceCart.innerHTML=productSaveLocaleStorages.priceProduct

    const deleteCart = document.getElementById("button")
    deleteCart.className= "bi bi-trash"
    products.appendChild(deleteCart)

    // ecouter bouton SUPPRIMER
  deleteCart.addEventListener("click", (event)=>{
    event.preventDefault()
    localStorage.removeItem("idProductSelectionner")
  
  })
  }
}


  