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
  console.log(cameras);

  const boxCameras = document.getElementById("box-cameras")
  

  for (camera of cameras) {
    const vignetteCameras = document.createElement("Div")
    boxCameras.appendChild(vignetteCameras)
    console.log(vignetteCameras);
    const nameVignette = camera.name
    vignetteCameras.className = "vignette-cameras"
    
    const cameraName = document.createElement("h3")
    cameraName.innerHTML = camera.name
    vignetteCameras.appendChild(cameraName)

    const cameraDescription = document.createElement("p")
    cameraDescription.innerHTML = camera.description
    vignetteCameras.appendChild(cameraDescription)

    const cameraPrice = document.createElement("p")
    cameraPrice.innerHTML = camera.price
    vignetteCameras.appendChild(cameraPrice)

    const cameraImage = document.createElement("img")
    cameraImage.src=camera.imageUrl 
    vignetteCameras.appendChild(cameraImage)
   
  
    const cameraLink = document.createElement("a")
    cameraLink.href= 'product.html?id=' + camera._id
    vignetteCameras.appendChild(cameraLink)
    cameraLink.addEventListener("click", () =>{
      
    })
  }

}