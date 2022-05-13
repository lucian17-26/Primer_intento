const cantidadDeCuotas = [3, 6, 9, 12,18,24];
const iva = (1 * 40) / 100;




usuario.addEventListener("change", () =>{
    agregarUsuarioALocalStorage(usuario.value);
})

function agregarUsuarioALocalStorage(usuario){
    localStorage.setItem(`usuario`, usuario)
    console.log(localStorage.getItem(`usuario`));
}


let montoPrestamo = document.getElementById("monto-prestamo");
montoPrestamo.addEventListener("change", () =>{
    montoPrestamo.value == "" ? montoPrestamo.value = "Campo Obligatorio" :
    agregarMontoALocalStorage(montoPrestamo.value)
} ) 

function agregarMontoALocalStorage(montoPrestamo){
    localStorage.setItem(`monto`, montoPrestamo)
    console.log(localStorage.getItem(`monto`));
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


let botnCalcular = document.getElementById("Boton-1");

botnCalcular.addEventListener("click", devolverValor ) 
function devolverValor(){
    
    // funcion a ejecutar
    let salida = (parseInt(montoPrestamo.value) * iva) + parseInt(montoPrestamo.value);
    let salida2 = salida / parseInt(cuotaPrestamo.value);
    let salida3 = Math.ceil(salida2);//salida final de la funcion 
    
    // Cuadro descriptivo del prestamo
    let valorCuota1= document.getElementById("valor-cuota1");
    valorCuota1.innerText= "Cuota a pagar";
    let valorCuota= document.getElementById("valor-cuota");
    valorCuota.innerText= `$ ${salida3}`;
    
    let capitalTotal= document.getElementById("capital-total");
    capitalTotal.innerHTML="$ "+ parseInt(cuotaPrestamo.value)* salida3;
    let capitalTotal1= document.getElementById("capital-total1");
    capitalTotal1.innerText= "Total a pagar";
    
    let interesAgregado= document.getElementById("interes-agregado");
    interesAgregado.innerText= "40% IVA ";
    let interesAgregado1= document.getElementById("interes-agregado1");
    interesAgregado1.innerText= "Interes agregado";
    
};


localStorage.setItem(`cantidad_de_cuotas`, cantidadDeCuotas);
localStorage.setItem(`iva`, iva);

const retornaCuotas = localStorage.getItem("cantidad_de_cuotas");
console.log(retornaCuotas.split(","));


const retornaIva = localStorage.getItem("iva");
console.log(retornaIva);

