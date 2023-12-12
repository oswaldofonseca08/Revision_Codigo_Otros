// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./img/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./img/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./img/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./img/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./img/zapato-rojo.jpg"}
]

//Se creean las variables que contendran las entradas del html
const listaDeProductos = document.getElementById("listaDeProductos");
const filtroInput = document.getElementById("filtroInput");
const filtrarButton = document.getElementById("filtrarButton");


//Se reescribe todo el codigo
function displayProductos(productos) {
  listaDeProductos.innerHTML = "";
  productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");

      const titulo = document.createElement("p");
      titulo.classList.add("titulo");
      titulo.textContent = producto.nombre;

      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);

      div.appendChild(titulo);
      div.appendChild(imagen);

      listaDeProductos.appendChild(div);
  });
}

function filtrarProductos() {
  const texto = filtroInput.value.toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
}

filtrarButton.addEventListener("click", filtrarProductos);

function filtrado(productos = [], texto) {
  return productos.filter(item =>
      item.tipo.toLowerCase().includes(texto) ||
      item.color.toLowerCase().includes(texto)
  );
}

displayProductos(productos);