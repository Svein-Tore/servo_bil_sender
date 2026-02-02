input.onButtonPressed(Button.A, function () {
    radio.sendString("Pil V")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Stopp")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Annet")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Pil H")
})
radio.setGroup(1)
radio.setTransmitPower(7)
let sendtekst = "Stopp"
basic.showIcon(IconNames.Happy)
