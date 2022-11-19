  var contador = 28;
  var etiqueta = document.querySelector(".temp");
  var id;
  function descarga(){
     id = window.setInterval(function(){
        contador--;
        if(contador < 0){
           etiqueta.innerHTML = "Oferta Caducada"
           window.clearInterval(id);
        }
        else {
           etiqueta.innerHTML = "<b> La oferta caduca en </b>" + contador.toString() + " segundos";
        }
     }, 1000)
  }
document.addEventListener('DOMContentLoaded', descarga, false);

function Suscribir() {
   alert("El correo ah sido enviado con éxito")
   document.querySelector(".cdm").value=``;
}

$("#btn-pagar").click(function () {
   $(".pagoT").text( $("#precioTotal").text());
})
