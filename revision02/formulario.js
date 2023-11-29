const formulario = document.querySelector("form")

const validacion = (e) => {

  //e.prevent();
  
  var n = document.getElementById("name").value;
  var e = document.getElementById("age").value;

  // const na = formulario.nacionality

  // var nombre = n.value
  // var edad = e.value

  // var i = na.selectedIndex
  // var nacionalidad = na.options[i].value
  // console.log(nombre, edad)
  // console.log(nacionalidad)

  if (n.length === 0) {
    n.classList.add("error")
  }
  if (e < 18 || e > 120) {
    e.classList.add("error")
  }

  if (n.length > 0 && (e > 18 && e < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "Argentina") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "Mexicana") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "Venezolana") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "Peruana") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}