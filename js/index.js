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
    const vignetteCameras = document.createElement("div")
    boxCameras.appendChild(vignetteCameras)
    console.log(vignetteCameras);
 
    vignetteCameras.className = "vignette-cameras"
    
    const cameraName = document.createElement("h3")
    cameraName.innerHTML = camera.name
    


    const cameraImage = document.createElement("img")
    cameraImage.src=camera.imageUrl 
   
   
  
    const cameraLink = document.createElement("a")
    cameraLink.href= 'product.html?id=' + camera._id
    cameraLink.appendChild(cameraName)
    cameraLink.appendChild(cameraImage)
    vignetteCameras.appendChild(cameraLink)

  }

}