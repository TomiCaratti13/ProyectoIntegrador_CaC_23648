
// Selecciono los elementos y los paso a una variable
let nombre = document.getElementById("formNombre");
let apellido = document.getElementById("formApellido");
let mail = document.getElementById("formEmail");
let cantidad = document.getElementById("formCantidad");
let categoria = document.getElementById("formCategoria");
let pagoTotal = document.getElementById("pagoTotal");

// Defino los de precios
const valorTicket = 200;

const descEstudiante = 0.8;
const descTrainee = 0.5;
const descJunior = 0.15;

// Verificación de formulario
/* function formValido(){

}*/

// Cálculo de cantidad a pagar
function precioTotal() {

    //formValido();
    /* if(verificado){

    } else {

    }*/

    let precioTotalTickets = cantidad.value * valorTicket;
    switch (parseInt(categoria.value)) {
        case 1:
            precioTotalTickets = precioTotalTickets;
            break;
        case 2:
            precioTotalTickets -= descEstudiante * precioTotalTickets;
            break;
        case 3:
            precioTotalTickets -= descTrainee * precioTotalTickets;
            break;
        case 4:
            precioTotalTickets -= descJunior * precioTotalTickets;
            break;
        default:
            alert('La categoría seleccionada no es válida');
            return;
    }
    // Muestro el valor en el HTML
    pagoTotal.value = `Total a pagar: $${precioTotalTickets.toFixed(2)}`;
}

// Botón llama a la función precioTotal al escuchar el evento click
resumen.addEventListener('click', precioTotal);

// Reseteo del Formulario
function resetForm() {
    pagoTotal.innerHTML = "";
}

borrar.addEventListener('click', resetForm);
