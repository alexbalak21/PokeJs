const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

const img = new Image()
img.src = "./img/Town.png"

const playerImage = new Image()
playerImage.src = "./img/playerDown.png"
canvas.width = 1024
canvas.height = 576

const offset = {
  x: -736,
  y: -602,
}

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, i + 70))
}

class Boundary {
  static width = 48
  static height = 48
  constructor({position}) {
    this.position = position
    this.width = 48
    this.height = 48
  }

  draw() {
    c.fillStyle = "red"
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const boundaries = []

collisionsMap.forEach((row, y) => {
  row.forEach((id, x) => {
    if (id === 1025)
      boundaries.push(
        new Boundary({
          position: {x: x * Boundary.width + offset.x, y: y * Boundary.height + offset.y},
        })
      )
  })
})

class Sprite {
  constructor({position, image, frames = {max: 1}}) {
    this.position = position
    this.image = image
    this.frames = frames
  }

  draw() {
    c.drawImage(
      this.image,
      0,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    )
  }
}
const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2,
  },
  frames: {
    max: 4,
  },
  image: playerImage,
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  image: img,
})

const keys = {
  up: false,
  down: false,
  right: false,
  left: false,
}

const testBoundary = new Boundary({
  position: {
    x: 400,
    y: 400,
  },
})

const movables = [background, testBoundary]

function animate() {
  window.requestAnimationFrame(animate)
  background.draw()
  // boundaries.forEach((boundary) => boundary.draw())
  testBoundary.draw()
  player.draw()

  if (keys.down && lastKey === "down") {
    movables.forEach((movable) => (movable.position.y -= 3))
  } else if (keys.up && lastKey === "up") {
    movables.forEach((movable) => (movable.position.y += 3))
  } else if (keys.right && lastKey === "right") {
    movables.forEach((movable) => (movable.position.x -= 3))
  } else if (keys.left && lastKey === "left") {
    movables.forEach((movable) => (movable.position.x += 3))
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
