input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    sensor()
})
function sensor () {
    counter = 0
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P1, 0)
        distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
        if (distance <= 5) {
            counter += 1
        }
    }
    if (counter >= 5) {
        basic.showIcon(IconNames.Yes)
    }
}
let distance = 0
let counter = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
