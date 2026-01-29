input.onButtonPressed(Button.A, function () {
    radio.sendString("Pil V")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Stop")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Annet")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Pil H")
})
radio.setGroup(1)
