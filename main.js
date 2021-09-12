//TODO: se viene la UALATRU

//-**************************-//

//FIXME: funcion que observe si hay guardado algo en local storag y en base a eso defina el monto inicial de la app => 0 por default
// chequea el storage para previsualizacion.
console.group("storage")

const chequeoDato = () => {
    var dato = parseInt(localStorage.getItem("ingresoKEY"))
    if(dato != undefined){
        document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${dato}</h2>
        </div>`
    }
    console.log(dato)
    return dato
}
chequeoDato()

console.groupEnd()



//FIXME:  recuperar dato!
// recupera nuevo dato del storage
const acumulador = () => {
    let dato = parseInt(localStorage.getItem("ingresoKEY"))
    console.log(dato)
    let nuevodato = dato + document.getElementById("depositar").value       

    console.log(nuevodato)
}

//FIXME: funcion depositar y mostar en pantalla

console.group("deposito")

const arrayDepositos = [];

const deposito = () => {
    let ingresoDinero = document.getElementById("depositar").value
    
    if (ingresoDinero < 1 || ingresoDinero > 10000) {

    } else {
        document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${ingresoDinero}</h2>
        </div>`
        
        arrayDepositos.push(parseFloat(ingresoDinero))
        
        document.getElementById("print").innerHTML = `Depositaste ${ingresoDinero}`
        
        // ingreso datos al local storage
        localStorage.setItem("ingresoKEY", ingresoDinero)
        
        console.log(arrayDepositos)
        
        // FECHAS!
        console.group("fecha y hora")

        const nuevoIngreso = {
            fecha : Date(),
            monto : ingresoDinero
        }
        console.log(nuevoIngreso)
        
        console.groupEnd()
    }
    return ingresoDinero;
}
deposito(acumulador());

console.groupEnd()


//TODO: Retiro de dinero



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