//récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search

//extraire l'id
const urlSearchParams = new URLSearchParams(queryString_url_id)

const id = urlSearchParams.get("id")

fetch("http://localhost:3000/api/cameras")

  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    showProduct(value)


  })
  .catch(function (err) {
    // Une erreur est survenue
  });

const showProduct = cameras => {

//afichage du produit (de l'oblet) qui a été sélectionné par l'id

const idProductSelectionner = cameras.find((element) => element._id === id)

console.log(id)
//selectionner la class ou je vais injecter le code html
const photoProduct = document.getElementById("photo-product")
const textProduct = document.getElementById("text-product")

//la structure html pour l'affichage du produit sélectionné

  const ImageProduct = document.createElement("img")
  ImageProduct.src=idProductSelectionner.imageUrl
  photoProduct.appendChild(ImageProduct)

  const listProduct = document.createElement("ul")
  textProduct.appendChild(listProduct)

  const nameProduct = document.createElement("li")
  nameProduct.innerText= "Nom: "+idProductSelectionner.name
  listProduct.appendChild(nameProduct)

  const descriptionProduct = document.createElement("li")
  descriptionProduct.innerText="Description: "+idProductSelectionner.description
  listProduct.appendChild(descriptionProduct)
  
  const priceProduct = document.createElement("li")
  const priceEuro = (idProductSelectionner.price/100)
  const convertEuro = (new Intl.NumberFormat('fr-FR', {style:'currency', currency: 'EUR'}).format(priceEuro))
  
  priceProduct.innerText= "Prix: "+ convertEuro
  listProduct.appendChild(priceProduct)
  
  const productOption = idProductSelectionner.lenses
// boucle sur toutes les options
  for( choiceOption of productOption){ 
    const option =document.createElement("option")
    selectOption.appendChild(option)
// cree 
  option.innerHTML = choiceOption
  }
// récupération des données selectionnées dans selectOption
   
// sélection de l'id du formulaire
  const idForm = document.querySelector("#selectOption")

// sélection du bouton AJOUTER AU PANIER
  const btnPanier = document.querySelector("#btn-add")
  console.log(btnPanier)

// ecouter bouton AJOUTER AU PANIER
  btnPanier.addEventListener("click", (event)=>{
    event.preventDefault()

// choix de l'option dans une variable
  const choiceForm = idForm.value

// récupération des données du formulaire
  const dataCart = {
    idProductSelectionner : idProductSelectionner._id,
    nameProduct : idProductSelectionner.name,
    priceProduct : idProductSelectionner.price / 100,
    option : choiceForm,
  }      
  console.log(dataCart)
    
    })
}
// local storage
// stocker la récupération des données du formulaire dans le local storage
