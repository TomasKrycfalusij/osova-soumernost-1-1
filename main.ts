let i: number;
// OSA
let a = 2
let b = 0
let displej = 5
for (i = 0; i < displej; i++) {
    led.plotBrightness(a, b, 100)
    b += 1
}
// CTVERECE
led.setBrightness(255)
let x = 0
let y = randint(0, 3)
for (i = 0; i < 2; i++) {
    led.plot(x, y)
    led.plot(x + 1, y)
    led.plot(x, y + 1)
    led.plot(x + 1, y + 1)
    x += 3
}
