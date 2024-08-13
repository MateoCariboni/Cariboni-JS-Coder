
var productos = [
    { id: 1, nombre: 'Fragancia Masculina', precio: 8000, stock: 23},
    { id: 2, nombre: 'Fragancia Femenina', precio: 8000, stock: 1},
    { id: 3, nombre: 'Invicto', precio: 26000, stock: 7},
    { id: 4, nombre: '212 VIP', precio: 25000, stock: 22},
    { id: 5, nombre: 'Nightmare', precio: 23000, stock: 0},
    { id: 6, nombre: 'BodySplash', precio: 5000, stock: 15},
    { id: 7, nombre: 'Textil', precio: 20000, stock: 3},
    { id: 8, nombre: '212', precio: 13000, stock: 15},
    { id: 9, nombre: 'BOSS', precio: 18000, stock: 100}
];

var carrito = [];

function mostrarProductos() {
    var contenedorProductos = document.getElementById('productos');

    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];
        var productoDiv = document.createElement('div');
        var nombreProducto = document.createElement('h3')
        nombreProducto.textContent = producto.nombre;
        var precioProducto = document.createElement('p');
        precioProducto.textContent = 'Precio: $' + producto.precio;
        var botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al Carrito';
        botonAgregar.setAttribute('onclick', 'agregarAlCarrito(' + producto.id + ')');
        var stockProducto = document.createElement('p')
        stockProducto.textContent = 'Stock: ' + producto.stock;

        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(precioProducto)
        productoDiv.appendChild(botonAgregar)
        productoDiv.appendChild(stockProducto)

        contenedorProductos.appendChild(productoDiv);}
}

function actualizarProductos() {
    var contenedorProductos = document.getElementById('productos')
    contenedorProductos.innerHTML = ''
    mostrarProductos()
}

function agregarAlCarrito(id) {
    var productoSeleccionado;
    var productoEncontrado = false
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productoEncontrado = true
            if (productos[i].stock > 0) {
                productoSeleccionado = productos[i];
                productos[i].stock--;
                carrito.push(productoSeleccionado)
                actualizarCarrito();
                actualizarProductos()
            } else {
                alert("No queda más stock");
            }
            break;
        }
    } if (!productoEncontrado) {
        alert("Producto no encontrado");
    }
}

function actualizarCarrito() {
    var contenedorCarrito = document.getElementById('items-carrito')
    contenedorCarrito.innerHTML = ''
    var total = 0

    for (var i = 0; i < carrito.length; i++) {
        var item = carrito[i];
        var itemDiv = document.createElement('div');
        var nombreItem = document.createElement('h4');
        nombreItem.textContent = item.nombre;
        var precioItem = document.createElement('p')
        precioItem.textContent = 'Precio: $' + item.precio;
        itemDiv.appendChild(nombreItem);
        itemDiv.appendChild(precioItem)

        contenedorCarrito.appendChild(itemDiv);

        total += item.precio;
    }

    var totalParrafo = document.getElementById('total')
    totalParrafo.textContent = 'Suma Total: $' + total;
}

function pedirNombre(){
    let nombre = prompt("Ingresa tu nombre:")

    alert(nombre + ", tu compra llegara mañana entre las 12hs y las 21hs")
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos()
})