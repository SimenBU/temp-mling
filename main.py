Temp = "Temperatur"
Temp_Verdi = 0

def ReadSensor():
    return pins.analog_read_pin(AnalogPin.P1)

def on_forever():
    Temp_Verdi = ReadSensor()
    serial.write_value(Temp, Temp_Verdi)
    basic.pause(1000)
basic.forever(on_forever)
