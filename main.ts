input.onButtonPressed(Button.A, function () {
    start = 1
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
})
function doeafstand () {
    afstand = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (afstand < 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
        basic.pause(1000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    }
}
function doelicht () {
    licht = input.lightLevel()
    if (licht == 5) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
}
let licht = 0
let afstand = 0
let start = 0
start = 0
basic.forever(function () {
    doelicht()
    if (start == 1) {
        doeafstand()
    }
})
