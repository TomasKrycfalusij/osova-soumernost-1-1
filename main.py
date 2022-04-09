a = 2
b = 0
displej = 5

for i in range(displej):
    led.set_brightness(100)
    led.plot(a, b)
    b += 1

x = 0
led.plot(x ,y)
y = randint(0, 4)