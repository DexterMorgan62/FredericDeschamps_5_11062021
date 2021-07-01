//récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search;

//extraire l'id
const urlSearchParams = new URLSearchParams(queryString_url_id);

const id = urlSearchParams.get("id");

fetch("http://localhost:3000/api/cameras")

  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    showThumbnails(value)


  })
  .catch(function (err) {
    // Une erreur est survenue
  });

const showThumbnails = cameras => {

//afichage du produit (de l'oblet) qui a été sélectionné par l'id

const idProductSelectionner = cameras.find((element) => element._id === id);


//selectionner la class ou je vais injecter le code html
const positionProduct = document.querySelector(".products-result");
console.log(positionProduct);

//la structure html pour l'affichage du produit sélectionné
const structureProduct = `
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
`
//injection html dans la page produit
positionProduct.innerHTML= structureProduct
}
