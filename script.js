
var productos = [
    { id: 1, nombre: 'Fragancia Masculina', precio: 8000, stock: 23},
    { id: 2, nombre: 'Fragancia Femenina', precio: 8000, stock: 1},
    { id: 3, nombre: 'Invicto', precio: 26000, stock: 7},
    { id: 4, nombre: '212 VIP', precio: 25000, stock: 22},
    { id: 5, nombre: 'Nightmare', precio: 23000, stock: 0},
    { id: 6, nombre: 'BodySplash', precio: 5000, stock: 15},
];

var carrito = [];

function mostrarProductos() {
    var contenedorProductos = document.getElementById('productos');

    for (var i = 0; i < productos.length; i++) {
        var producto = productos[i];

        var productoDiv = document.createElement('div');
        var nombreProducto = document.createElement('h3');
        nombreProducto.textContent = producto.nombre;

        var precioProducto = document.createElement('p');
        precioProducto.textContent = 'Precio: $' + producto.precio;

        var botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al Carrito';
        botonAgregar.setAttribute('onclick', 'agregarAlCarrito(' + producto.id + ')');

        var stockProducto = document.createElement('p');
        stockProducto.textContent = 'Stock: ' + producto.stock + ' unidades';

        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(precioProducto);
        productoDiv.appendChild(botonAgregar);
        productoDiv.appendChild(stockProducto);

        contenedorProductos.appendChild(productoDiv);
    }
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    var productoSeleccionado;

    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id === id && productos[i].stock > 0) {
            productoSeleccionado = productos[i];
            productos[i].stock--
            break;
        } else if (productos[i].stock === 0){
            alert("No que mas stock")
        }
    }

    carrito.push(productoSeleccionado);
    actualizarCarrito();
}

// Actualizar la vista del carrito
function actualizarCarrito() {
    var contenedorCarrito = document.getElementById('items-carrito');
    contenedorCarrito.innerHTML = ''; // Limpiar el carrito

    var total = 0;

    for (var i = 0; i < carrito.length; i++) {
        var item = carrito[i];

        var itemDiv = document.createElement('div');
        var nombreItem = document.createElement('h4');
        nombreItem.textContent = item.nombre;

        var precioItem = document.createElement('p');
        precioItem.textContent = 'Precio: $' + item.precio;

        itemDiv.appendChild(nombreItem);
        itemDiv.appendChild(precioItem);

        contenedorCarrito.appendChild(itemDiv);

        total += item.precio;
    }

    var totalParrafo = document.getElementById('total');
    totalParrafo.textContent = 'Total: $' + total;
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();
});