const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

const img = new Image()
img.src = "./img/Town.png"

const playerImage = new Image()
playerImage.src = "./img/playerDown.png"
canvas.width = 1024
canvas.height = 576

class Sprite {
  constructor({position, image}) {
    this.position = position
    this.image = image
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

const background = new Sprite({
  position: {
    x: -736,
    y: -602,
  },
  image: img,
})

const keys = {
  up: false,
  down: false,
  right: false,
  left: false,
}

function animate() {
  window.requestAnimationFrame(animate)
  background.draw()
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
  if (keys.down && lastKey === "down") {
    background.position.y -= 12
    console.log("Y : ", background.position.y)
  } else if (keys.up && lastKey === "up") {
    background.position.y += 12
    console.log("Y : ", background.position.y)
  } else if (keys.right && lastKey === "right") {
    background.position.x -= 12
    console.log("X : ", background.position.x)
  } else if (keys.left && lastKey === "left") {
    background.position.x += 12
    console.log("X : ", background.position.x)
  }
}
animate()

let lastKey = ""
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "s":
      keys.down = true
      lastKey = "down"
      break
    case "z":
      keys.up = true
      lastKey = "up"
      break
    case "q":
      keys.left = true
      lastKey = "left"
      break
    case "d":
      keys.right = true
      lastKey = "right"
      break
  }
})

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "s":
      keys.down = false
      break
    case "z":
      keys.up = false
      break
    case "q":
      keys.left = false
      break
    case "d":
      keys.right = false
      break
  }
})
