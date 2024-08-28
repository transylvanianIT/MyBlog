let thumbnails = document.querySelectorAll(".thumbnail")
let mainImage = document.getElementById("main-image")

for (let i = 0; i< thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", 
    function () {
        mainImage.src = this.src;
    })
}