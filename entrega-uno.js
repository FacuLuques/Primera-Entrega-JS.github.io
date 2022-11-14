alert("Calcular cuotas");

let cuotas = Number(prompt("¿En cuantas cuotas le gustaria pagar? por favor escriba 3, 6 o 12. O escriba 0 para salir"));


function dividirTres () {
    let montoTres = Number(prompt("escriba el monto a convertir"))
      alert("Cada cuota sera de : " + (parseInt(montoTres / 3)))
}

function dividirSeis () {
    let montoSeis = Number(prompt("escriba el monto a convertir, a este se le agregara un interes del 14%"))
        alert("Cada cuota sera de : " + (parseInt(montoSeis + (14% montoSeis)) / 6))
}

function dividirDoce () {
    let montoDoce = Number(prompt("escriba el monto a convertir, a este se le agregara un interes del 59%"))
        alert("Cada cuota sera de : " + (parseInt(montoDoce + (59% montoDoce)) / 12))
}

while (cuotas != 0) {

  switch (cuotas) {
    case 3:
        dividirTres ()
        break;

      case 6:
        dividirSeis ()
        break;

        case 12:
        dividirDoce ()
        break;

        default:
            alert("Seleccione una opcion o escriba 0 para salir.")
            break;
  }
  cuotas = Number(prompt("¿En cuantas cuotas le gustaria pagar? por favor escriba 3, 6 o 12. O escriba 0 para salir"));
}