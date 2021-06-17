const affichageName = document.querySelector(#name);
console.log(affichageName)
function askHello() {
    fetch("http://localhost:3000/api/cameras")
    .then(function(res) {
      if (res.ok) {
        return res.json();
        console.log(res);
      }
    })
    .then(function(value) {
      console.log(value);
      const txtName = value[0].name;
      affichageName.innerHTML = txtName;
          
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
  }
  
  document
    .getElementById("ask-hello")
    .addEventListener("click", askHello);