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
    console.log(choiceOption)
}

//nombre d'options
 /*const choiceOption = document.getElementById("selection")
 const numberOption = idProductSelectionner.lenses
 console.log(numberOption)

//boucle for pour afficher toutes les options
for(var i = 0; i < numberOption.lenght; i++){
  numberOption[i].selected = selectOption

}   
choiceOption.innerText = numberOption[i]
selectOption = document.getElementById("selection").value
*/



 
  textProduct.appendChild(buttonAdd)
  buttonAdd.addEventListener("click", function(){

  })

}


/*const structureProduct = `
<div class="mise_en_page_products">
  <div class="products_photo">
        <img src="${idProductSelectionner.imageUrl}" ></img>
  </div>
  <div class="products">
    <ul>
      <li>Nom du produit: <span>${idProductSelectionner.name}</span></li>
      <li>Description : <span>${idProductSelectionner.description}</span></li>
      <li>Option : <span>${idProductSelectionner.lenses}</span></li>
      <li>Prix : <span>${idProductSelectionner.price} €</span></li>
    </ul>
    <form>
      <label for="option"></label>
      <select name="option" id="option">
        <option value="option_1">${idProductSelectionner.lenses}</option>
        <option value="option_2">${idProductSelectionner.lenses}</option>
      </select>
    </form>
    <button id="btn-envoyer" type="submit" name="btn-envoyer">Ajouter au panier"</button>
  </div>
</div>  
*/
