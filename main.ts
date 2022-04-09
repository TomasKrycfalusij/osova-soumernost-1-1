let a = 2
let b = 0
let displej = 5
for (let i = 0; i < displej; i++) {
    led.setBrightness(100)
    led.plot(a, b)
    b += 1
}
let x = 0
led.plot(x, y)
let y = randint(0, 4)
