input.onButtonPressed(Button.A, function () {
    sendtekst = "Pil v"
})
input.onGesture(Gesture.Shake, function () {
    sendtekst = "Stop"
})
input.onButtonPressed(Button.AB, function () {
    sendtekst = "Annet"
})
input.onButtonPressed(Button.B, function () {
    sendtekst = "Pil H"
})
let sendtekst = ""
radio.setGroup(1)
radio.setTransmitPower(7)
sendtekst = "Stop"
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    radio.sendString(sendtekst)
})
