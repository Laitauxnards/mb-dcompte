input.onButtonPressed(Button.A, function () {
    temps = 9
    while (temps > 0) {
        basic.showNumber(temps)
        basic.pause(1000)
        temps = temps - 1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Terreur_de_wallerich()
    Terreur_de_wallerich()
})
function Terreur_de_wallerich () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(200)
}
let temps = 0
temps = 0
