let stockProductosFav = [
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
let favorito = [];
const contenedorFavorito = document.getElementById('favorito-contenedor');
const botonVaciarFav = document.getElementById('vaciar-favorito');
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('favorito')) {   
    favorito = JSON.parse(localStorage.getItem('favorito'))
    actualizarFavorito();
    }
})
botonVaciarFav.addEventListener('click', () => {
        favorito.length = 0;
        actualizarFavorito();
    })
stockProductosFav.forEach((productfav) => {
const boton = document.getElementById(`agregar-fav${productfav.id}`)
    boton.addEventListener('click', () => {
        agregarFavorito(productfav.id);
    } )
});
const agregarFavorito = (favId) => {
        const itemfav = stockProductosFav.find((favo) => favo.id === favId);
        favorito.push(itemfav);
        actualizarFavorito();
        console.log(favorito);
        Swal.fire ({
                    text: 'Producto agregado a favoritos',
                    icon: 'success',
                    color: '#f75b99f3',
                    background: '#0f0509f3',
                    timer: 2000,
                    timerProgressBar: true,
                    toast: true,
                    position: 'bottom-end',
                    showConfirmButton: false,
                })
    }
const eleminarDelFavorito = (favId) => {
    const itemfav = favorito.find((favo) => favo.id === favId);
    const indicefav = favorito.indexOf(itemfav);
    favorito.splice(indicefav, 1);   
    actualizarFavorito();
}
const actualizarFavorito = () => {
    contenedorFavorito.innerHTML = "";
    favorito.forEach((favo) => {
        const div = document.createElement('div');
        div.className = ('productoEnFavorito');
        div.innerHTML = `
        <div class="media">
            <a>
                <img alt=""  class="img-carrito imgpeq" src="${favo.img}">
            </a>
            <div class="media-body">
                <a>
                    <h4>${favo.modelo}</h4>
                </a>
                <h4>
                    S/ <span>${favo.precio.toFixed(2)}</span>
                </h4>
            </div>
            <div class="p-0">
            <a onclick="eleminarDelFavorito(${favo.id})" class="ps-4 fomato_a">
                <i class="ti-trash" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-x" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                </i>
            </a>
        </div>        
        `;
        contenedorFavorito.appendChild(div);
        localStorage.setItem('favorito', JSON.stringify(favorito))
    });
}
    