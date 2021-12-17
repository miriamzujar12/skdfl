input.onButtonPressed(Button.A, function () {
    if (contador == 1) {
        bloqueo = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (control.millis() - tiempo == 1300) {
        contador += 1
        tiempo = control.millis()
    } else {
        basic.showIcon(IconNames.Sad)
        while (true) {
            basic.pause(100)
        }
    }
})
let bloqueo = 0
let tiempo = 0
let contador = 0
basic.showString("contraseña")
contador = 0
tiempo = control.millis()
bloqueo = 1
basic.forever(function () {
    if (tiempo == 1) {
        basic.showString("Hello!")
    } else {
        if (control.millis() < tiempo) {
        	
        }
    }
})
