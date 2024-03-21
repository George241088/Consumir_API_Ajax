function get_all() {

    $.get("https://localhost:44366/api/usuario").done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
    });
}

function get_1_by_id() {
    var id = document.getElementById("get_1_id").value;

    $.get("https://localhost:44366/api/usuario/" + id).done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
    });
}


function insertar1() {

    var nombre = document.getElementById("txt_nombre").value;
    var correo = document.getElementById("txt_correo").value;

    var dta = "nombre=" + nombre + "&correo=" + correo;
    $.ajax({
        url: "https://localhost:44366/api/usuario",
        method: "POST",
        //contentType: "application/JSON",
        datatype:"html",
        data: dta
    }).done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
    });
}

function insertar() {
    var nombre = document.getElementById("txt_nombre").value;
    var correo = document.getElementById("txt_correo").value;

    var data = {
        nombre: nombre,
        correo: correo
    }

    $.post("https://localhost:44366/api/usuario",  data).done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
    });
}

function borrar_id() {
    var id = document.getElementById("txt_id_borrar").value;
    

    $.ajax({
        url: "https://localhost:44366/api/usuario/" + id,        
        method: "DELETE",        
    }).done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
    })
}


function modificar_id() {
    var id = document.getElementById("txt_id_modificar").value;
    var nombre = document.getElementById("txt_nombre_modificar").value;
    var correo = document.getElementById("txt_correo_modificar").value;

    var dta = "id=" + id + "&nombre=" + nombre + "&correo=" + correo;
    $.ajax({
        method: "PUT",
        url: "https://localhost:44366/api/usuario",
        datatype: "html",
        data:dta
    }).done(function (response) {
        console.log(response);
    }).fail(function (response) {
        console.log(response);
    });
        
}