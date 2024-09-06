let carrito = [];

const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById('productos');

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <img src="db/img/${producto.img}.jpg" class="imgCatalogo">
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
            <p class="stock">Stock: ${producto.stock}</p>
            <button class="${producto.stock === 0 ? 'no-hay-stock' : ''}" 
                ${producto.stock === 0 ? 'disabled' : ''}>
                ${producto.stock === 0 ? 'No hay stock' : 'Agregar al Carrito'}
            </button>
        `;

        const botonAgregar = productoDiv.querySelector('button');

        if (producto.stock > 0) {
            botonAgregar.addEventListener('click', () => agregarAlCarrito(producto.id, productos));
        }

        contenedorProductos.appendChild(productoDiv);
    });
}


const actualizarProductos = (productos) => {
    document.getElementById('productos').innerHTML = '';
    mostrarProductos(productos);
}

const agregarAlCarrito = (id, productos) => {
    const producto = productos.find(p => p.id === id);
    if (!producto || producto.stock === 0) return alert("Producto no disponible");

    const productoEnCarrito = carrito.find(item => item.id === id);
    producto.stock--;

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
    actualizarProductos(productos);
}

const actualizarCarrito = () => {
    const contenedorCarrito = document.getElementById('items-carrito');
    contenedorCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h3>${item.nombre} x${item.cantidad}</h3>
            <p>Precio: $${item.precio * item.cantidad}</p>
        `;
        contenedorCarrito.appendChild(itemDiv);
        total += item.precio * item.cantidad;
    });

    document.getElementById('total').textContent = `Suma Total: $${total}`;
}

const pedirNombre = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = "pages/detalle-compra.html";
}


document.getElementById('pagarButton').addEventListener('click', pedirNombre);
document.getElementById('iconoCarrito').addEventListener('click', () => {
    document.getElementById('carrito').classList.toggle('hidden');
});

fetch("db/productos.json")
    .then(response => response.json())
    .then(data => {
        mostrarProductos(data);
    })
