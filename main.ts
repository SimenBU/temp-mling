let Temp = "Temperatur"
let Temp_Verdi = 0
function ReadSensor(): number {
    return pins.analogReadPin(AnalogPin.P1)
}

basic.forever(function on_forever() {
    let Temp_Verdi: number;
    Temp_Verdi
    Temp_Verdi = ReadSensor() * 4
    serial.writeValue(Temp, Temp_Verdi)
    basic.pause(30000)
})
