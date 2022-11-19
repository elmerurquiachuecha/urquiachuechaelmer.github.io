let stockProductos = [
    {id: 1, modelo: "Xiaomi Note 11", precio: 1380.00, cantidad: 1, img: './media/1.png'},
    {id: 2, modelo: "Xiaomi Note 10", precio: 939.00, cantidad: 1, img: './media/2.png'},
    {id: 3, modelo: "Xiaomi 12 5G", precio: 2483.00, cantidad: 1, img: './media/3.png'},
    {id: 4, modelo: "Xiaomi 12 Morado", precio: 1889.00, cantidad: 1, img: './media/4.png'},
    {id: 5, modelo: "Xiaomi 11T Pro", precio: 2783.00, cantidad: 1, img: './media/5.png'},
    {id: 6, modelo: "Xiaomi 10T CU", precio: 1999.00, cantidad: 1, img: './media/6.png'},
    {id: 7, modelo: "Xiaomi Redmi 10C", precio: 719.00, cantidad: 1, img: './media/7.png'},
    {id: 8, modelo: "Xiaomi 11 Lite 5G NE", precio: 1929.00, cantidad: 1, img: './media/8.png'},
    {id: 9, modelo: "Xiaomi Redmi 9A", precio: 489.00, cantidad: 1, img: './media/9.png'},
    {id: 10, modelo: "Xiaomi Redmi Note 8", precio: 863.00, cantidad: 1, img: './media/10.webp'},
    {id: 11, modelo: "Xiaomi Poco X3 GT", precio: 1788.00, cantidad: 1, img: './media/11.png'},
    {id: 12, modelo: "Xiaomi POCO X4 Pro", precio: 3260.00, cantidad: 1, img: './media/12.png'},
]

const contenedorCarrito = document.getElementById('carrito-contenedor');
const botonVaciar = document.getElementById('vaciar-carrito');
const precioTotal = document.getElementById('precioTotal')
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito();
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})

stockProductos.forEach((producto) => {
    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarCarrito(producto.id);
    } )
    
});

const agregarCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId) {
                prod.cantidad ++;
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId);
        carrito.push(item);
        console.log(carrito);
    }
    actualizarCarrito();
    Swal.fire ({
        text: 'Producto agregado a tu carrito',
        icon: 'success',
        color: '#1eff00',
        background: '#252525f3',
        timer: 2000,
        timerProgressBar: true,
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
    })
}

const eleminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    
    actualizarCarrito();
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
        <div class="d-flex flex-row mb-3">
            <div class="p-0">
                <img src="${prod.img}" height="55" width="55" class="img-carrito imgpeq">
            </div>
            <div class="p-0">
                <p>${prod.modelo}</p>
            </div>
            <div class="p-2">
                <p>${prod.precio.toFixed(2)}</p>
                <p class="text-center">(${prod.cantidad})</p>
            </div>
            <div class="p-0">
                <a onclick="eleminarDelCarrito(${prod.id})" class="boton-eleminar justify-content-start fomato_a"> <i class="ti-shopping-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>
                </i></a>
            </div>
        </div>
        `;
        contenedorCarrito.appendChild(div);
        localStorage.setItem('carrito', JSON.stringify(carrito))
    });
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio*prod.cantidad, 0).toFixed(2)
}

