function enviarFormulario() {
    var oficinaSeleccionada = document.getElementById("oficina").value;
    var fechaInicioTramite = document.getElementById("fechaInicio").value;

    console.log("Oficina seleccionada:", oficinaSeleccionada);
    console.log("Fecha de inicio de trámite:", fechaInicioTramite);

    return false;
}


function mostrarResultados(oficina, fechaInicio) {
    console.log("Oficina seleccionada:", oficina);
    console.log("Fecha de inicio de trámite:", fechaInicio);
}