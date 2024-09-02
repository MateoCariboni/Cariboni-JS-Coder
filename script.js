let productos = [
    { id: 1, img: 'fra_masc', nombre: 'Fragancia Masculina', precio: 8000, stock: 23},
    { id: 2, img: 'fra_fem', nombre: 'Fragancia Femenina', precio: 8000, stock: 1},
    { id: 3, img: 'invicto', nombre: 'Invicto', precio: 26000, stock: 7},
    { id: 4, img: '212_vip', nombre: '212 VIP', precio: 25000, stock: 22},
    { id: 5, img: 'nightmare', nombre: 'Nightmare', precio: 23000, stock: 0},
    { id: 6, img: 'bodysplash', nombre: 'BodySplash', precio: 5000, stock: 15},
    { id: 7, img: 'textil', nombre: 'Textil', precio: 20000, stock: 3},
    { id: 8, img: '212', nombre: '212', precio: 13000, stock: 15},
    { id: 9, img: 'boss', nombre: 'BOSS', precio: 18000, stock: 100}
];

let carrito = [];

function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos')

    productos.forEach(producto => {
        const productoDiv = document.createElement('div')
        productoDiv.innerHTML = `
            <img src="img/${producto.img}.jpg" class="imgCatalogo">
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <p class="stock">Stock: ${producto.stock}</p>
            <button>Agregar al Carrito</button>
        `;
        
        const botonAgregar = productoDiv.querySelector('button');
        botonAgregar.addEventListener('click', () => agregarAlCarrito(producto.id))

        contenedorProductos.appendChild(productoDiv)
    });
}


function actualizarProductos() {
    let contenedorProductos = document.getElementById('productos')
    contenedorProductos.innerHTML = ''
    mostrarProductos()
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id)

    if (!producto) {
        return alert("Producto no encontrado")
    }

    const productoEnCarrito = carrito.find(item => item.id === id)

    if (producto.stock > 0) {
        producto.stock--

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++
        } else {
            carrito.push({ ...producto, cantidad: 1 })
        }

        actualizarCarrito()
        actualizarProductos()
    } else {
        alert("No queda más stock")
    }
}



function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('items-carrito')
    contenedorCarrito.innerHTML = ''
    let total = 0

    carrito.forEach(item => {
        const itemDiv = document.createElement('div')
        const nombreItem = document.createElement('h3')
        nombreItem.textContent = `${item.nombre} x${item.cantidad}`
        const precioItem = document.createElement('p')
        precioItem.textContent = 'Precio: $' + item.precio * item.cantidad

        itemDiv.appendChild(nombreItem)
        itemDiv.appendChild(precioItem)
        contenedorCarrito.appendChild(itemDiv)

        total += item.precio * item.cantidad
    });

    const totalParrafo = document.getElementById('total')
    totalParrafo.textContent = 'Suma Total: $' + total
}


function pedirNombre(){
    let nombre = prompt("Ingresa tu nombre:")

    alert(nombre + ", tu compra llegara mañana entre las 12hs y las 21hs")
}

document.getElementById('pagarButton').addEventListener('click', pedirNombre)

document.getElementById('iconoCarrito').addEventListener('click', () => {
    const carrito = document.getElementById('carrito')
    carrito.classList.toggle('hidden')
});


mostrarProductos()