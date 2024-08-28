const canvas = document.querySelector("canvas")

const width = 12 * 16 * 4
const height = 12 * 9 * 4

canvas.width = width
canvas.height = height

const c = canvas.getContext("2d")

c.fillStyle = "red"
c.fillRect(0, 0, width, height)

function drawTile(tileSetLocation = "./assets/tileSet.png", number = 0) {
  const testTile = 438
  const tileSize = 12
  let tileSetWidth, tileSetHeight, tilePerLine, numberOfLines
  const tileSet = new Image()
  tileSet.src = tileSetLocation
  tileSet.onload = () => {
    tileSetWidth = tileSet.width
    tileSetHeight = tileSet.height
    tilePerLine = tileSetWidth / tileSize
    numberOfLines = tileSetHeight / tileSize
  }
}

const imageSize = 384
const tilePerLine = 384 / 12

const testTile = 434
const line = Math.floor(testTile / 32)
const col = testTile - tilePerLine * line

const sx = col * 12,
  sy = line * 12,
  sWidth = 12,
  sHeight = 12,
  dx = 0,
  dy = 0,
  dWidth = 12,
  dHeight = 12

const img = new Image()
img.src = "./assets/tileSet.png"

img.onload = () => c.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
