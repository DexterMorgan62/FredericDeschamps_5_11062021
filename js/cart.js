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

  for(product of cart){


    const tableBody = document.getElementById("box-cart")
    const tableCart = document.createElement("tr")  
    tableBody.appendChild(tableCart)

    const arrayPhoto = document.createElement("td")
    const imageCart = document.createElement("img")
  
    arrayPhoto.appendChild(imageCart)
    tableCart.appendChild(arrayPhoto)
    imageCart.className="img-thumbnail"
    imageCart.src=product.photoProduct
    imageCart.href= product.linkProduct

    const nameCart = document.createElement("td")
    const nameProduct = document.createElement("h2")
    tableCart.appendChild(nameCart)
    nameCart.appendChild(nameProduct)
    nameProduct.innerHTML=product.nameProduct

    const optionCart = document.createElement("td")
    const optionProduct = document.createElement("h2")
    tableCart.appendChild(optionCart)
    optionCart.appendChild(optionProduct)
    optionProduct.innerHTML=product.option

    const priceCart = document.createElement("td")
    const priceProduct = document.createElement("h2")
    tableCart.appendChild(priceCart)
    priceCart.appendChild(priceProduct)
    priceProduct.innerHTML=product.priceProduct

    const tableColumneCart = document.createElement("td")
    const buttonDelete = document.createElement("button")
    buttonDelete.className= "fa fa-trash"
    tableColumneCart.appendChild(buttonDelete)
    tableCart.appendChild(tableColumneCart)

    const idProductSelect = product.idProduct

    const optionProductSelect = product.option
    // ecouter bouton SUPPRIMER
    console.log(idProductSelect)
    buttonDelete.addEventListener("click", (event)=>{
      event.preventDefault()
      deleteCart()
      })
    const totalCart = []   
    const priceProductCart = product.priceProduct
    totalCart.push(priceProductCart)
    
    // la méthode reduce() permet d'accumuler les valeurs d'une liste
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const total = totalCart.reduce(reducer,0)
    const totalEuro = (new Intl.NumberFormat('fr-FR', {style:'currency', currency: 'EUR'}).format(total))
    const priceTotal = document.getElementById("price-total")
    priceTotal.innerHTML="Prix total= "+totalEuro
    //supprimer un produit du panier
    const deleteCart = () => {
      
      localStorage.removeItem("products")
      console.log(idProductSelect)
      const idProductDelete = (element) => element.idProduct === idProductSelect
      const optionProductDelete = (element) => element.option === optionProductSelect
      const indexProduct = cart.findIndex(idProductDelete&&optionProductDelete)
      
      cart.splice(indexProduct,1)
      console.log(indexProduct)
      console.log(optionProduct)
      // JSON.parse => convertir les données dans le local storage au format JSON  
      localStorage.setItem("products",JSON.stringify(cart))
      console.log(cart)
      window.location.href = "cart.html"
    }
    //vider le panier

    const buttonDeleteAll = document.querySelector("#delete-all")
    // ecouter bouton SUPPRIMER tout
    buttonDeleteAll.addEventListener("click", (event)=>{
      event.preventDefault()
      localStorage.clear("product")
      alert("Le panier a été vidé")
      window.location.href = "cart.html"

    })
  }
  // Formulaire
  const sendForm = document.querySelector("#send-form")
  sendForm.addEventListener("click", (event)=>{
    event.preventDefault()
 /*  localStorage.setItem("name", document.querySelector("#name").value)
    localStorage.setItem("mail", document.querySelector("#mail").value)
    localStorage.setItem("adress", document.querySelector("#adress").value)
    localStorage.setItem("tel", document.querySelector("#tel").value)
    console.log(sendForm)*/
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


  