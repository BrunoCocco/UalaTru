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




// FIXME: Funcion init, chequea local y baja info a la app

const init = () => {
    if(localStorage.getItem("ingresoKEY") == null){
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


// TODO: instancia constructora del nuevo deposito. 


class deposito{
    constructor(monto,fecha){
        this.monto = monto,
        this.fecha = fecha
    }
}

//FIXME: array acumulador
let acumuladorDepositos = [];

//FIXME: Nuevo deposito

const depositar = (monto,fecha) => {
    new deposito(monto,fecha)
    
    this.monto = parseInt(document.getElementById("depositar").value)
    this.fecha = Date()

    let datostorage = JSON.parse(localStorage.getItem("ingresoKEY", Number))

    if(this.monto > 0 && this.monto <= 10000 ){
        
    nuevoNumero = datostorage + this.monto
    console.log(nuevoNumero)
    
    document.getElementById("saldoActual").innerHTML = `<div> 
        <h2 style="color:blue;">$ ${nuevoNumero}</h2>
        </div>`
    
    localStorage.setItem("ingresoKEY", nuevoNumero)
    
    acumuladorDepositos.push(this.monto)
    
    $("#print").append (`
    <div class="row mt-3">
        <div class="col-12">
            <div class="print--deposito"> Depositaste $${this.monto}</div>
            <div>
                <p class="print--date"> ${this.fecha}</p
            </div>
        </div>
    </div>`)
    }
    else{
        console.log("gilastrun")
    }
    console.log(acumuladorDepositos)
}


// funcion Retirar Dinero