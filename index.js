const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
const img = new Image()
img.src = "./img/Town.png"
const playerImage = new Image()
playerImage.src = "./img/playerDown.png"
canvas.width = 1024
canvas.height = 576

function animate() {
  window.requestAnimationFrame(animate)
  c.drawImage(img, -734, -600)
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  )
}
animate()

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "s":
      console.log("down")
      break
    case "z":
      console.log("up")
      break
    case "q":
      console.log("left")
      break
    case "d":
      console.log("right")
      break
  }
})
