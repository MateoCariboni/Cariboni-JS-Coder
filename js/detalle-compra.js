const carrito = JSON.parse(localStorage.getItem("carrito")) || []
const nombre = JSON.parse(localStorage.getItem("nombre")) || []
const radios = document.querySelectorAll('input[name="pago"]');
const efectivoDiv = document.getElementById('efectivoDiv');
const debitoDiv = document.getElementById('debitoDiv');
const cuotasDiv = document.getElementById('cuotasDiv');

radios.forEach(radio => {
    radio.addEventListener('change', function () {
        efectivoDiv.style.display = 'none';
        debitoDiv.style.display = 'none';
        cuotasDiv.style.display = 'none';

        if (this.value === 'efectivo') {
            efectivoDiv.style.display = 'block';
        } else if (this.value === 'debito') {
            debitoDiv.style.display = 'block';
        } else if (this.value === 'cuotas') {
            cuotasDiv.style.display = 'block';
        }
    });
});

const contenedorDetalleCompra = document.getElementById("detalle-compra")
let total = 0

carrito.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
            <h3>${item.nombre} x${item.cantidad}</h3>
            <p>Precio total: $${item.precio * item.cantidad}</p>
        `;
    contenedorDetalleCompra.appendChild(itemDiv);
    total += item.precio * item.cantidad;
});

document.getElementById("detalle-nombre").textContent = `Pedido de ${nombre}`
