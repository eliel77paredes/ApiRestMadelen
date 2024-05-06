document.addEventListener("DOMContentLoaded", function () {
  $("#guardarMueble").on("click", function () {
    let datos = {
      tipo_de_mueble: $("#tipo_de_mueble").val(),
      madera: $("#madera").val(),
      descripción: $("#descripción").val(),
      precio: $("#precio").val(),
    };
    if ($("#id-mueble").val() === "") {
      crearMueble(datos);
    } else {
      datos.id = $("#id-mueble").val();
      editarMueble(datos);
    }
  });

  $("#agregarMueble").on("click", function () {
    $("#id-mueble").val("");
  });
  $(".btn-warning").on("click", function () {
    let idMueble = $(this).data("id");
    $("#id-mueble").val(idMueble);
  });

  $(".btnEliminar").on("click", function () {
    let idMueble = $(this).data("id");
    $("#id-mueble").val(idMueble);
  });

  $("#btnEliminar").click(function () {
    let id = $("#id-mueble").val();
    eliminar(id);
  });
});
//al abrir el modalverifica si hay un id valido si lo hay lo rellena para un actualizar
$("#mueble").on("shown.bs.modal", function () {


  if ($("#id-mueble").val() !== "") {
    $.ajax({
      type: "GET",
      url: "http://localhost:8080/ApiRestMadelen/back-end/get_id_Mueble.php",
      dataType: "JSON",
      data: { id: $("#id-mueble").val() },
      success: function (respuesta) {
        $("#tipo_de_mueble").val(respuesta[0].tipo_de_mueble);
        $("#madera").val(respuesta[0].madera);
        $("#descripción").val(respuesta[0].descripción);
        $("#precio").val(respuesta[0].precio);
      },
      error: function (error) {
        // Manejar errores
        console.error("Error en la solicitud AJAX:", error);
        Swal.fire({
          title: "Error",
          text: "error:" + error,
          icon: "error", 
        });
      },
    });
  }else{
    $("#tipo_de_mueble").val("");
        $("#madera").val("");
        $("#descripción").val("");
        $("#precio").val("");
  }
  
});

function crearMueble(datos = {}) {
  let errores = false;

  for (let campo in datos) {
    if (datos[campo].trim() === "") {
      $("#" + campo)
        .removeClass("is-valid")
        .addClass("is-invalid");
      errores = true;
    } else {
      $("#" + campo)
        .removeClass("is-invalid")
        .addClass("is-valid");
    }
  }
  if (errores) {
    Swal.fire({
      title: "Error",
      text: "error: porfavor llene todos los campos",
      icon: "error",
    });
    return;
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/ApiRestMadelen/back-end/create_Mueble.php",
    data: datos,
    dataType: "json",
    success: function (respuesta) {
      $("#mueble").modal("hide");

      $("#tipo_de_mueble").val(""),
        $("#madera").val(""),
        $("#descripción").val(""),
        $("#precio").val(""),
        console.log(respuesta);
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}

function editarMueble(datos = {}) {
  let errores = false;

  for (let campo in datos) {
    if (datos[campo].trim() === "") {
      $("#" + campo)
        .removeClass("is-valid")
        .addClass("is-invalid");
      errores = true;
    } else {
      $("#" + campo)
        .removeClass("is-invalid")
        .addClass("is-valid");
    }
  }
  if (errores) {
    Swal.fire({
      title: "Error",
      text: "error: porfavor llene todos los campos",
      icon: "error",
    });
    return;
  }

  $.ajax({
    type: "PUT",
    url: "http://localhost:8080/ApiRestMadelen/back-end/update_Mueble.php",
    data: datos,
    dataType: "json",
    success: function (respuesta) {
      $("#mueble").modal("hide");

      $("#tipo_de_mueble").val(""),
        $("#madera").val(""),
        $("#descripción").val(""),
        $("#precio").val(""),
        console.log(respuesta);
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}

function eliminar(id) {
  console.log(id);
  $.ajax({
    type: "DELETE",
    url: "http://localhost:8080/ApiRestMadelen/back-end/delete_Mueble.php?id=" + id,
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta);
      $('modalEliminar').modal('hide')
      Swal.fire({
        title: "Exito",
        text: respuesta.message,
        icon: "success",
        timer: 5000,
      }).then(() => {
        location.reload();
      });
    },
    error: function (error) {
      // Manejar errores
      console.error("Error en la solicitud AJAX:", error);
      Swal.fire({
        title: "Error",
        text: "error:" + error,
        icon: "error",
      });
    },
  });
}
