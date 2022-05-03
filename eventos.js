const cantidadDeCuotas = [3, 6, 9, 12,18,24];
const iva = (1 * 40) / 100;


let montoPrestamo = document.getElementById("monto-prestamo");
montoPrestamo.addEventListener("change", recibirMonto ) 
function recibirMonto(){
    console.log(montoPrestamo.value);
}

let cuotaPrestamo = document.getElementById("cuota-prestamo");
cuotaPrestamo.addEventListener("change", recibirCuota)
function recibirCuota() {
    console.log(cuotaPrestamo.value);
}



// agregar la opccion "seleccionar" al primer select para seleccionar la cantidad de cuotas 
let optionNula = document.createElement("option");

optionNula.value = "";
optionNula.innerText = "Seleccionar";
// asigno la primera opccion del select
cuotaPrestamo.append(optionNula);

// Recorre el array CantidadDeCuotas para asignarlas a select y poder definir un numero de cuota 
cantidadDeCuotas.forEach((cuota) => {

    let option = document.createElement("option");
    option.value = cuota;
    option.innerText = `${cuota} Meses`;
    // asigno el numero de cuota a la variable 
    cuotaPrestamo.append(option);
});


let prestamo = document.getElementById("Boton-1");

prestamo.addEventListener("click", calcularPrestamos);

function calcularPrestamos(){
    let salida = (parseInt(montoPrestamo.value) * iva) + parseInt(montoPrestamo.value);
    let salida2 = salida / parseInt(cuotaPrestamo.value);
    if(salida2 == ""){
        alert("Datos mal ingresados");
    }else{
        confirm( "Su cuota final es de " +"$"+ Math.ceil(salida2));
    }
}
