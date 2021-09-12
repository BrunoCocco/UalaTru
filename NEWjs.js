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
    

let acumuladorDepositos = [];


/**
 *  @param {depositar} // ingreso de dinero desde el onclick
 */


//TODO: funcion depositar

const depositar = () => {

    let newDeposito = JSON.parse(localStorage.getItem("ingresoKEY", Number))
    
    newDeposito += parseInt(document.getElementById("depositar").value)
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${newDeposito}</h2>
        </div>`
    localStorage.setItem("ingresoKEY", newDeposito)
    
    acumuladorDepositos.push(parseInt(document.getElementById("depositar").value))
    
    $("#print").append (`<div style="color:green;">Depositaste ${parseInt(document.getElementById("depositar").value)}</div> <br>`)
    
    console.log(newDeposito)
    console.log(acumuladorDepositos)
}


//TODO: fucion retirar

const retiro = () =>{
    
    let montoRetirado = localStorage.getItem("ingresoKEY", Number)
    
    if(montoRetirado != undefined){
    montoRetirado -= document.getElementById("retiro").value
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${montoRetirado}</h2>
        </div>`
    localStorage.setItem("ingresoKEY", montoRetirado)
    }
    
    $("#print").append (`<div style="color:red;">Retiraste ${parseInt(document.getElementById("retiro").value)}</div> <br>`)

    console.log(montoRetirado)
}


// TODO: plazo fijo

//TODO: login y Storage.

