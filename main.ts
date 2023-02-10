let Temp = "Temperatur"
let Temp_Verdi = 0
function ReadSensor(): number {
    return input.temperature()
}

basic.forever(function on_forever() {
    let Temp_Verdi: number;
    Temp_Verdi
    Temp_Verdi = ReadSensor()
    serial.writeValue(Temp, Temp_Verdi)
    basic.pause(1000)
})
