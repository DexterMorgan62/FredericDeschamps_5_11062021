// local storage
// stocker la récupération des données du formulaire dans le local storage

// JSON.parse => convertir les données dans le local storage au format JSON  
var productSaveLocaleStorage= JSON.parse(localStorage.getItem("products"))
// fonction ajouter un produit dans le local storage
const addProduct = () => {
    // ajout dans le tableau avec données choisi par utilisateur
      productSaveLocaleStorage.push(dataCart)
    // transformation en JSON et envoie dans la KEY "products" dans le local storage et convertir en JSON  
      localStorage.setItem("products", JSON.stringify(productSaveLocaleStorage))
    }
console.log(productSaveLocaleStorage)

// affichage des produits du panier
// selection de la classe ou injecter code HTML
const boxCart = document.querySelector("#box-cart")
console.log(boxCart)

// si pannier vide" afficher panier vide"
if(productSaveLocaleStorage === null){
    console.log("vide")
}
else{
    console.log("non vide")
}
