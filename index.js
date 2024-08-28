const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
const img = new Image()
img.src = "./img/Town.png"

canvas.width = 1024
canvas.height = 576

img.onload = () => {
  c.drawImage(img, -720, -600)
}
