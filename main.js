//TODO: se viene la UALATRU

//-**************************-//

//FIXME: funcion que observe si hay guardad0 algo en local storag y en base a eso defina el monto inicial de la app => 0 por default
//
console.group("storage")
function chequeoDato(){
    let dato = localStorage.getItem("ingresoKEY")
    if(dato != undefined){
        document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${dato}</h2>
        </div>`
    }
    console.log(dato)
    return dato
}
chequeoDato()

console.groupEnd();



//FIXME: funcion depositar y mostar en pantalla
console.group("deposito")
const depositos = [];

function recuperarDato(){
    let ingresoDinero = document.getElementById("depositar").value
    
    if (ingresoDinero < 1 || ingresoDinero > 10000) {
        console.log(" saldo incorrecto")
    } else {
        document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${ingresoDinero}</h2>
        </div>`
        
        depositos.push(ingresoDinero)
        
        document.getElementById("print").innerHTML = `Depositaste ${ingresoDinero}`
        // ingreso datos al local storage
        localStorage.setItem("ingresoKEY", ingresoDinero)
        
        console.group(`Fecha y Hora`)
        
        const fechaUnix = Date.now()
        console.log(fechaUnix)
        const fecha = Date()
        console.log(fecha)
        
        console.groupEnd();
        // TODO: """ let acumulado = depositos + ingresoDinero
        // console.log(acumulado)
    }
    
    console.log(ingresoDinero)

    console.log(depositos)
    
    return ingresoDinero;
}

console.groupEnd();

//FIXME:  fecha en formato UNIX



//TODO: funcion guardar deposito

// class Deposito {
//     constructor(cant){
//         this.cantidad = cant
//     }
// }
// function depositar(dinero){
//     let newDeposito = new Deposito(dinero)
//     console.log(dinero);
// }




//TODO: funcion plazo fijo y funcion interes diario.
//

//TODO: funcion guarar usario
//