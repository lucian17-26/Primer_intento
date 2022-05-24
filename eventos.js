const cantidadDeCuotas = [3, 6, 9, 12, 18, 24];
const iva = (1 * 40) / 100;

// muestra un mensaje de error si no se completaron todos los datos 
let errorDeDatos = document.getElementById("valor-de-prestamo");

// pide datos del usuario
let usuario = document.getElementById("usuario")
usuario.addEventListener("change", () => {
    agregarUsuarioALocalStorage(usuario.value);
})

function agregarUsuarioALocalStorage(usuario) {
    localStorage.setItem(`usuario`, usuario)
    console.log(localStorage.getItem(`usuario`));
}

// pide cantidad de efectivo a solicitar
let montoPrestamo = document.getElementById("monto-prestamo");
montoPrestamo.addEventListener("change", () => {
    agregarMontoALocalStorage(montoPrestamo.value)
})

function agregarMontoALocalStorage(montoPrestamo) {
    localStorage.setItem(`monto`, montoPrestamo)
    console.log(localStorage.getItem(`monto`));
}


// muestra las cuotas que brinda 
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


//descripcion de cuadro con datos del prestamo  
let valorCuota1 = document.getElementById("valor-cuota1");
let valorCuota = document.getElementById("valor-cuota");

let capitalTotal = document.getElementById("capital-total");
let capitalTotal1 = document.getElementById("capital-total1");

let interesAgregado = document.getElementById("interes-agregado");
let interesAgregado1 = document.getElementById("interes-agregado1");
// -------------------------------------------------------
// -------------------------------------------------------

// boton que calcula los datos recibidos 
let botnCalcular = document.getElementById("Boton-1");

botnCalcular.addEventListener("click", devolverValor)

function devolverValor() {
    // funcion a ejecutar
    let salida = (parseInt(montoPrestamo.value) * iva) + parseInt(montoPrestamo.value);
    let salida2 = salida / parseInt(cuotaPrestamo.value);
    let salida3 = Math.ceil(salida2); //salida final de la funcion 

    if (isNaN(salida3) || usuario.value === "") {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'COMPLETAR TODOS LOS CAMPOS',
        })
    } else {
        // Cuadro descriptivo del prestamo
        valorCuota1.innerText = "Cuota a pagar";
        valorCuota.innerText = `$ ${salida3}`;

        capitalTotal1.innerText = "Total a pagar";
        capitalTotal.innerHTML = "$ " + parseInt(cuotaPrestamo.value) * salida3;

        interesAgregado1.innerText = "Interes agregado";
        interesAgregado.innerText = "40% IVA ";
        
        fetch("financieras.json").then((response => {
            return response.json();
        })).then((financieras) =>{
            setTimeout(() => {
                financieras.forEach((financiera) =>{
                    let li = document.createElement("li");
                    li.innerHTML= financiera.empresa;
                    ul.append(li);
                    
                })
            }, 2500);
            
            
        })
    }
};


localStorage.setItem(`cantidad_de_cuotas`, cantidadDeCuotas);
localStorage.setItem(`iva`, iva);

const retornaCuotas = localStorage.getItem("cantidad_de_cuotas");
console.log(retornaCuotas.split(","));


const retornaIva = localStorage.getItem("iva");
console.log(retornaIva);


