
//FIXME: login : generar un logion de usuario

//TODO: se inicializa storage en cero, pero no se logra que recuerde el monto enterior
const iniciarSesion = () =>{
    let usuario = document.getElementById("ingresar").value
    console.log(usuario)
    document.getElementById("header").innerHTML = `
    <div class="row mt-3">
        <h3 class=" header__h3--bienvenidos col-11 pt-1">Bienvenidos a UalaTru " ${usuario} "</h3>
        <button class="btn-close col-1 pt-2" onclick="cerrarSesion()"></button>
    </div>
    `
    localStorage.setItem("NewUser", usuario)
}
// FIXME: Cerrar session

const cerrarSesion = () =>{
    let usuario = document.getElementById("ingresar").value
    console.log(usuario)
    document.getElementById("header").innerHTML = `
    <div class="row mt-3">
        <h3 class="header__h3--bienvenidos col-9 pt-1">Bienvenidos a UalaTru</h3>
        <button class="btn btn-primary col-3" data-bs-toggle="modal"  data-bs-target="#ingreso">ingresar</button>
    </div>
    `
}





//FIXME: funciona!!.

/**
 *  @param {init} // setea el local storage
 */
const init = () => {
    if(  localStorage.getItem("ingresoKEY") == null){
        localStorage.setItem("ingresoKEY", 0)
    $("#saldoActual").append ( `<div> 
    <h2>$ ${localStorage.getItem("ingresoKEY")} </h2>
        </div>`)
        console.log(localStorage)
    }
    else{
        $("#saldoActual").append ( `<div> 
    <h2>$ ${localStorage.getItem("ingresoKEY")} </h2>
        </div>`)
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
        <h2 style="color:blue;">$ ${newDeposito}</h2>
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
    
    montoRetirado -= document.getElementById("retiro").value
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:blue;">$ ${montoRetirado}</h2>
        </div>`
    
        localStorage.setItem("ingresoKEY", montoRetirado)
    
    $("#print").append (`
    <div class="row mt-3">
        <div class="col-12">
            <div class="print--retiro"> retiraste $${parseInt(document.getElementById("retiro").value)}</div>
            <div>
                <p class="print--date"> ${Date()} </p
            </div>
        </div>
    </div>`)
    
    console.log(montoRetirado)
}


// TODO: plazo fijo