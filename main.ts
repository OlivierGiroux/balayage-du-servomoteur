let Angle = 0
servos.P0.setRange(0, 170)
basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index <= 16; index++) {
            Angle = index * 10 + 10
            servos.P0.setAngle(Angle)
            basic.pause(100)
        }
    }
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index <= 32; index++) {
            Angle += -5
            servos.P0.setAngle(Angle)
            basic.pause(100)
        }
    }
})
