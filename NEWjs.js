
//FIXME: login : generar un logion de usuario

//TODO: se inicializa storage en cero, pero no se logra que recuerde el monto enterior
const iniciarSesion = () =>{
    let usuario = document.getElementById("ingresar").value
    console.log(usuario)
    document.getElementById("header").innerHTML = `
    <div class="row mt-3">
        <h3 class=" header__h3--bienvenidos col-11 pt-1">Bienvenidos a UalaTru <spam class="spam__Dato"> ${usuario}</spam> </h3>
        <button class="btn-close col-1 pt-2" onclick="cerrarSesion()"></button>
    </div>
    `
    localStorage.setItem("NewUser", usuario)
}


// FIXME: Cerrar session
//TODO: mejorar la entrada.
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
//TODO: que mire si la session esta iniciada en local storage, y que te muestre el nombre directo
/**
 *  @param {init} // consulta y setea el local storage.
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
    <h2 style="color: blue;">$ ${localStorage.getItem("ingresoKEY")} </h2>
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
    if(parseInt(document.getElementById("depositar").value) > 0 && parseInt(document.getElementById("depositar").value) <= 10000 ){
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
    }
    else{
        console.log("operacion de deposito invalida")
    } 
    console.log(acumuladorDepositos)
}

/**
 *  @param {retiro} // retira dinero y setea nuevo parametro en el localstorage.
*/

//TODO: hacer que guarde en el array el monto que ingresa el usuario , no la diferencia! gilastum

let difRetiros = [];

const retiro = () => {
    let monto = localStorage.getItem("ingresoKEY", Number)
    if(monto > 0 && parseInt(document.getElementById("retiro").value) <= monto ){
    
        monto -= document.getElementById("retiro").value
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:blue;">$ ${monto}</h2>
        </div>`
    
        localStorage.setItem("ingresoKEY", monto)
    
    $("#print").append (`
    <div class="row mt-3">
        <div class="col-12">
            <div class="print--retiro"> retiraste $${parseInt(document.getElementById("retiro").value)}</div>
            <div>
                <p class="print--date"> ${Date()} </p
            </div>
        </div>
    </div>`)
    console.log(monto)
    difRetiros.push(monto)
    console.log(difRetiros)
    }
    else{
        console.log("operacion de retiro invalida")
    }
    
}


// TODO: plazo fijo