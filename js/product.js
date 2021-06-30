//récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search;
//console.log(queryString_url_id);

//extraire l'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
//console.log(urlSearchParams);

const id = urlSearchParams.get("id");
//console.log(id);

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
 // console.log(cameras);

//afichage du produit (de l'oblet) qui a été sélectionné par l'id


const idProduitSelectionner = cameras.find((element) => element._id === id);
//console.log(idProduitSelectionner)


//selectionner la class ou je vais injecter le code html
const positionElement2 = document.querySelector(".products-result");
console.log(positionElement2);

//la structure html pour l'affichage du produit sélectionné
const structureProduit2 = `
<div class="mise_en_page_products">
  <div class="products_photo">
        <img src="${idProduitSelectionner.imageUrl}" ></img>
  </div>
  <div class="products">
    <ul>
      <li>Nom du produit: <span>${idProduitSelectionner.name}</span></li>
      <li>Description : <span>${idProduitSelectionner.description}</span></li>
      <li>Option : <span>${idProduitSelectionner.lenses}</span></li>
      <li>Prix : <span>${idProduitSelectionner.price} €</span></li>
    </ul>
    <form>
      <label for="option"></label>
      <select name="option" id="option">
        <option value="option_1">option_1</option>
        <option value="option_2">option_2</option>
      </select>
    </form>
    <button id="btn-envoyer" type="submit" name="btn-envoyer">Ajouter au panier"</button>
  </div>
</div>  
`
//injection html dans la page produit
positionElement2.innerHTML= structureProduit2
}
