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
const boxProduct = document.getElementById("box-product")


//la structure html pour l'affichage du produit sélectionné
  const vignetteProduct = document.createElement("Div")
  boxProduct.appendChild(vignetteProduct)
  console.log(vignetteProduct)
  
  vignetteProduct.className = "vignette-product"
  const photoProduct = document.createElement("Div")
  vignetteProduct.appendChild(photoProduct)
  photoProduct.className = "photo-product"

  const ImageProduct = document.createElement("img")
  ImageProduct.src=idProductSelectionner.imageUrl
  photoProduct.appendChild(ImageProduct)
  
  const textProduct = document.createElement("div")
  vignetteProduct.appendChild(textProduct)
  textProduct.className = "text-product"

  const listProduct = document.createElement("ul")
  textProduct.appendChild(listProduct)

  const nameProduct = document.createElement("li")
  nameProduct.innerText= "Nom: "+idProductSelectionner.name
  listProduct.appendChild(nameProduct)

  const descriptionProduct = document.createElement("li")
  descriptionProduct.innerText="Description: "+idProductSelectionner.description
  listProduct.appendChild(descriptionProduct)

  const priceProduct = document.createElement("li")
  priceProduct.innerText= "Prix: "+idProductSelectionner.price +" €"
  listProduct.appendChild(priceProduct)
  
  const formOption = document.createElement("form")
  listProduct.appendChild(formOption)
  const labelOption = document.createElement("label")
  formOption.appendChild(labelOption)
  labelOption.option = "option"
  const selectOption =document.createElement("select")
  formOption.appendChild(selectOption)
 
  const option =document.createElement("option")
  selectOption.appendChild(option)

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
