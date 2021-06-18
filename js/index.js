    fetch("http://localhost:3000/api/cameras")

    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
      showThumbnails (value)

      
    })
    .catch(function(err) {
      // Une erreur est survenue
    });

    const showThumbnails = cameras => {
      console.log(cameras);
      const productsDiv = document.getElementById("products")
      for (camera of cameras){
        const cameraName = document.createElement("h3")
        cameraName.innerHTML = camera.name

        productsDiv.appendChild (cameraName)

        const cameraDescription = document.createElement("p")
        cameraDescription.innerHTML = camera.description

        productsDiv.appendChild (cameraDescription)

        const cameraPrice = document.createElement("p")
        cameraPrice.innerHTML = camera.price

        productsDiv.appendChild (cameraPrice)

        /*image1 = new Image(46,46);
        const cameraImage = document.createElement("img")
        cameraImage.innerHTML = camera.imageUrl

        productsDiv.appendChild (cameraImage)
        cameraImage.src = url
        */
      }

    }