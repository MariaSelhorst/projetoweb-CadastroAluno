const inputFile = document.querySelector("#flImage")
const image = document.querySelector("#image_user")

inputFile.addEventListener("change", (e) => {
    image.src = window.URL.createObjectURL(e.target.files[0])
})