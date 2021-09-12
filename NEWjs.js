//TODO: setear local storage

const init = () => {

    let initStorageNumber = localStorage.getItem("")
    if( initStorageNumber == null){
        localStorage.setItem("ingresoKEY", 0)
    document.getElementById("saldoActual").innerHTML = `<div> 
    <h2 style="color:green;">$0</h2>
        </div>`
        console.log(initStorageNumber)
        console.log(localStorage)
    }
}

init()



/**
 *  @param {depositar} // ingreso de dinero desde el onclick
 */

// class deposito {
//     constructor(monto,fecha){
//         this.monto = monto,
//         this.fecha = fecha
//     }
// }
//TODO: funcion depositar
const depositar = () => {
    let newDeposito = JSON.parse(localStorage.getItem("ingresoKEY", Number))
    
    newDeposito += parseInt(document.getElementById("depositar").value)
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${newDeposito}</h2>
        </div>`
    localStorage.setItem("ingresoKEY", newDeposito)
    
    console.log(newDeposito)
}
    // let ingresoDinero = new deposito(document.getElementById("depositar").value, Date())
    // localStorage.setItem("ingresoKEY", ingresoDinero.monto)
    // document.getElementById("saldoActual").innerHTML = `<div> 
    // <h2 style="color:green;">$ ${ingresoDinero.monto}</h2>
    // </div>`
    // arrayDepositos.push(ingresoDinero.monto);

//     console.log(arrayDepositos)
//     console.log(ingresoDinero)
//     console.log(localStorage)
// }


//TODO: fucion retirar

// class retirarDinero {
//     constructor (retiro,fecha){
//     this.retiro = retiro,
//     this.fecha =  fecha
//     }
// }

const retiro = () =>{
    
    let montoRetirado = localStorage.getItem("ingresoKEY", Number)
    
    if(montoRetirado != undefined){
    montoRetirado -= document.getElementById("retiro").value
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${montoRetirado}</h2>
        </div>`
    localStorage.setItem("ingresoKEY", montoRetirado)
    }
    console.log(montoRetirado)
}


// TODO: plazo fijo

//TODO: login y Storage.

