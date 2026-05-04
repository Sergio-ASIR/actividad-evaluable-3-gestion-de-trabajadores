let contadorIT = 0;
let contadorMarketing = 0;
let contadorVentas = 0;
let contadorAdministracion = 0;

function anadirTrabajador() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let departamento = document.getElementById("departamento").value;
    
    let nuevoTrabajador = document.createElement("li");

    let clase = "";

    if (departamento === "it") {
        clase = "list-group-item-primary";
        contadorIT++;
    } 
    else if (departamento === "marketing") {
        clase = "list-group-item-success";
        contadorMarketing++;
    } 
    else if (departamento === "ventas") {
        clase = "list-group-item-warning";
        contadorVentas++;
    } 
    else if (departamento === "administracion") {
        clase = "list-group-item-info";
        contadorAdministracion++;
    }

    nuevoTrabajador.className = "list-group-item " + clase;

    nuevoTrabajador.textContent = nombre + " " + apellido;

    let lista = document.getElementById("listaTrabajadores");

    lista.appendChild(nuevoTrabajador);

    document.getElementById("contadorIT").textContent = contadorIT;
    document.getElementById("contadorMarketing").textContent = contadorMarketing;
    document.getElementById("contadorVentas").textContent = contadorVentas;
    document.getElementById("contadorAdministracion").textContent = contadorAdministracion;
}

let boton = document.getElementById("btnGuardar");

boton.addEventListener("click", anadirTrabajador);