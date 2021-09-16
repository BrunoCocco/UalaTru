
//TODO: login : generar un logion de usuario
//TODO: se inicializa storage en cero, pero no se logra que recuerde el monto enterior


//FIXME: rever el condicional, algo esta mal ahi.

/**
 *  @param {init} // setea el local storage
 */
const init = () => {

    let initStorageNumber = localStorage.getItem("")
    if( initStorageNumber == null){
        localStorage.setItem("ingresoKEY", 0)
    $("#saldoActual").append ( `<div> 
    <h2 style="color:green;">$0</h2>
        </div>`)
        console.log(initStorageNumber)
        console.log(localStorage)
    }
}
    init()

let acumuladorDepositos = [];


/**
 *  @param {depositar} // ingreso de dinero desde el onclick. y setea el localstorage
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
    
    $("#print").append (`
    <div class="row mt-3">
        <div class="col-12">
            <div class="print--deposito"> Depositaste $${parseInt(document.getElementById("depositar").value)}</div>
            <div>
                <p class="print--date"> ${Date()} </p
            </div>
        </div>
    </div>`)

    


    console.log(newDeposito)
    console.log(acumuladorDepositos)
}


//TODO: fucion retirar
/**
 *  @param {retiro} // retira dinero y setea nuevo numero en el localstorage.
 */
const retiro = () =>{
    
    let montoRetirado = localStorage.getItem("ingresoKEY", Number)
    
    if(montoRetirado != undefined){
    montoRetirado -= document.getElementById("retiro").value
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:green;">$ ${montoRetirado}</h2>
        </div>`
    
        localStorage.setItem("ingresoKEY", montoRetirado)
    }
    $("#print").append (`<div style="color:red;">Retiraste ${parseInt(document.getElementById("retiro").value)}</div><br> <div><p> ${Date()} </p></div> <br>`)

    console.log(montoRetirado)
}


// TODO: plazo fijo