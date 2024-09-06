const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const nombre = JSON.parse(localStorage.getItem("nombre")) || [];
const radios = document.querySelectorAll('input[name="pago"]');
const efectivoDiv = document.getElementById("efectivoDiv");
const debitoDiv = document.getElementById("debitoDiv");
const cuotasDiv = document.getElementById("cuotasDiv");
const botonPagar = document.getElementById("botonPagar");

efectivoDiv.style.display = "none";
debitoDiv.style.display = "none";
cuotasDiv.style.display = "none";
botonPagar.disabled = true; 

radios.forEach(radio => {
    radio.addEventListener("change", function () {
        efectivoDiv.style.display = "none";
        debitoDiv.style.display = "none";
        cuotasDiv.style.display = "none";

        if (this.value === "efectivo") {
            efectivoDiv.style.display = "block";
        } else if (this.value === "debito") {
            debitoDiv.style.display = "block";
        } else if (this.value === "cuotas") {
            debitoDiv.style.display = "block";
            cuotasDiv.style.display = "block";
        }
        validarFormulario();
    });
});

function validarFormulario() {
    const metodoPagoSeleccionado = document.querySelector('input[name="pago"]:checked').value;

    botonPagar.disabled = true;

    if (metodoPagoSeleccionado === "efectivo") {
        botonPagar.disabled = false;
    } else if (metodoPagoSeleccionado === "debito" || metodoPagoSeleccionado === "cuotas") {
        const nombreTitular = document.getElementById("nombreTitular").value;
        const codigoSeguridad = document.getElementById("codigoSeguridad").value;
        const numeroTarjeta = document.getElementById("numeroTarjeta").value;
        const mes = document.getElementById("mes").value;
        const anio = document.getElementById("anio").value;

        if (nombreTitular && codigoSeguridad && numeroTarjeta && mes && anio) {
            botonPagar.disabled = false;
        }
    }
}

document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener("input", validarFormulario);
});

const contenedorDetalleCompra = document.getElementById("detalle-compra");
let total = 0;

carrito.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
        <h3>${item.nombre} x${item.cantidad}</h3>
        <p>Precio total: $${item.precio * item.cantidad}</p>
    `;
    contenedorDetalleCompra.appendChild(itemDiv);
    total += item.precio * item.cantidad;
});

document.getElementsByClassName("detalle-nombre").textContent = `Pedido de ${nombre}`;

/////////////// BOTON PAGAR
botonPagar.addEventListener("click", function (e) {
    e.preventDefault();

    if (!botonPagar.disabled) {
        Swal.fire({
            title: 'Pago Exitoso',
            text: 'Tu pago ha sido procesado exitosamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            console.log("Pago confirmado y alerta cerrada");
            window.location.href = '../index.html';
        });
    }
});
