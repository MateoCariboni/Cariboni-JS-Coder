const producto0 = {nombre: "Fragancia Masculina",precio: 8000,stock: 8, cod:"0"}
const producto1 = {nombre: "Fragancia Femenina",precio: 8000,stock: 1, cod:"1"}
const producto2 = {nombre: "Invicto",precio: 22000,stock: 4, cod:"2"}
const producto3 = {nombre: "Blue Tequila",precio: 10000,stock: 22, cod:"3"}
const producto4 = {nombre: "Flowers",precio: 25000,stock: 0, cod:"4"}
const producto5 = {nombre: "BodySplash",precio: 8000,stock: 3, cod:"5"}
const producto6 = {nombre: "NightMares",precio: 25000,stock: 0, cod:"6"}
const producto7 = {nombre: "Difusor",precio: 8000,stock: 3, cod:"7"}

const catalogo = [producto0,producto1,producto2,producto3,producto4,producto5,producto6,producto7];

let carro = [];

let totalCarro = 0;

function mostrarCatalogo(){
    console.log("Catalogo disponible:")
    for(const producto of catalogo){
        console.log(producto.nombre + "  | Precio: " + producto.precio + " Stock: "+ producto.stock + " CODIGO: " + producto.cod)
    }
    console.log("Para agregar producto al carro escribir: agregarACarro(codigo del producto)")
    console.log("Para ver el precio del carro escribir: precioCarro()")
    console.log("Para finalizar la compra escribir: comprar()")
}

function precioCarro(){
    console.log("Valor del carro: "+totalCarro)
}

function agregarACarro(codigoAgregar){
    productoAgregar = codigoAgregar
    if (catalogo[productoAgregar].stock > 0){
        carro.push(catalogo[productoAgregar])
        catalogo[productoAgregar].stock--
    }else{
        alert("No queda stock del producto seleccionado")
    }
    precioTotal = 0
    for (i of carro){
        precioTotal += i.precio
    }
    totalCarro += precioTotal
    console.log("Haz agregado el articulo COD:"+codigoAgregar+". Valor del carro: "+totalCarro)
}

function comprar(){
    nombreComprador = prompt("Ingresa su nombre:")
    alert("Va a realizar un pago de $" + totalCarro + " pesos")
}

mostrarCatalogo()