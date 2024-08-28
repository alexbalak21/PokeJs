const canvas = document.querySelector("canvas")

console.log(canvas)

const width = 12 * 16 * 4
const height = 12 * 9 * 4

canvas.width = width
canvas.height = height

const c = canvas.getContext("2d")

c.fillStyle = "red"
c.fillRect(0, 0, width, height)
