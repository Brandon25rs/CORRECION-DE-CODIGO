// Se modificaron algunos llamamientos de las variables que no coincidían con el html y se agrego uno que no exisitía en el mismo, se reorganizaron las variables,
//se borró código repetido por su falta de uso, se cambio el nombre de una variable por interferir con el event, cambio de sintaxis added por add. 
//

var formulario = document.querySelector("form")
var lista = document.getElementById("listaDeInvitados")
var n = formulario.elements[0]
var x = formulario.elements[1]
var na = formulario.elements[2]



formulario.onsubmit = function(e) {

  e.preventDefault();

  var nombre = n.value
  var edad = x.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
    n.classList.remove("válido")

    console.log("ingrese un nombre válido");

  }// if

  if (edad < 18 || edad > 120) {
    x.classList.add("error")
    x.classList.remove("válido")

    console.log("ingrese una edad válida");
  }//if

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {

      n.classList.remove("error")
      n.classList.add("válido")
      x.classList.remove("error")
      x.classList.add("válido")
      n.value= "";
      x.value="";
  agregarInvitado(nombre, edad, nacionalidad)
  }//if
}



function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)
crearElemento("Nombre", nombre, elementoLista)
crearElemento("Edad", edad, elementoLista)
crearElemento("Nacionalidad", nacionalidad, elementoLista)

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
  } //agregarInvitado

function crearElemento(descripcion, valor, elementoLista) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}//crearElemento







