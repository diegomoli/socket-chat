var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has("nombre") || !params.has("sala")) {
  window.location = "index.html";
  throw new Error("El nombre y la sala son necesarios.");
}

var usuario = {
  nombre: params.get("nombre"),
  sala: params.get("sala"),
};

socket.on("connect", function () {
  console.log("Conectado al servidor");
  socket.emit("entrarChat", usuario, function (resp) {
    console.log("Usuario conectado", resp);
  });
});

// Escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});

// Enviar información
// socket.emit(
//   "crearMensaje",
//   {
//     nombre: "Fernando",
//     mensaje: "Hola Mundo",
//   },
//   function (resp) {
//     console.log("respuesta server: ", resp);
//   }
// );

// Escuchar información
socket.on("crearMensaje", function (mensaje) {
  console.log("Servidor:", mensaje);
});

//Escuchar cambios de usuarios cuando el usuario entra y sale del chat
socket.on("listaPersona", function (personas) {
  console.log("Personas:", personas);
});

//Mensajes privados
socket.on("mensajePrivado", function (mensaje) {
  console.log("Mensaje privado", mensaje);
});
