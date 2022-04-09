#OSA
a = 2
b = 0
displej = 5
for i in range(displej):
    led.plot_brightness(a, b, 100)
    b += 1

#CTVERECE
led.set_brightness(255)
x = 0
y = randint(0, 3)
for i in range(2):
    led.plot(x ,y)
    led.plot(x+1 ,y)
    led.plot(x ,y+1)
    led.plot(x+1 ,y+1)
    x += 3