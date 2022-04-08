let x = 2
let y = 0
let displej = 5
for (let i = 0; i < displej; i++) {
    led.setBrightness(100)
    led.plot(x, y)
    y += 1
}
