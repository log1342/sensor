let Mode = 0
let distance = 0
input.onButtonPressed(Button.A, function () {
    Mode = 1
})
input.onButtonPressed(Button.B, function () {
    Mode = 2
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) + 58
    basic.pause(2000)
    if (Mode == 1) {
        basic.showIcon(IconNames.No)
    } else if (Mode == 2) {
        basic.showIcon(IconNames.StickFigure)
    }
})
