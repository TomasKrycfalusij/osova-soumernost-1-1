x = 2
y = 0
displej = 5

for i in range(displej):
    led.set_brightness(100)
    led.plot(x, y)
    y += 1