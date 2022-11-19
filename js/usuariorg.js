$("#iniciarSesion").click(function () { 
    let data
    fetch("js/usuarios.json")
    .then(function(user){
        return user.json();
    })
    .then(function(usuarios){
        
        for(data of usuarios){
            let xusuario = $("#email").val();
            let xcontra = $("#contra").val();

            if ((xusuario == data.usuario || xusuario == data.correo ) && (xcontra == data.contrasena)) {
                $("#nameuser").text(`Bienevenido: ${data.datos}`)
                closeAccount()
                $("#noinicio").text("");
                return iniciodesesion();  
                
            } 
        }
        return $("#noinicio").text("Algunos edatos no coinciden");
    })
    function iniciodesesion(){
        Swal.fire({
            icon: 'success',
            text: `Hola ${data.datos}, iniciaste sesion correctamente`,
            showConfirmButton: false,
            timer: 1900
          }); 
    }
})
      





    // fetch("usuario.json")
    // .then(function(user){
    //     return user.json();
    // })
    // .then(function(vehiculo){
    //     let placeholder = document.querySelector("#data-output");
    //     let out="";
    //         for(let veh of vehiculo){
    //             out += `
    //                     <tr>
    //                     <td><img src='${veh.foto}' width="100px"></td>
    //                     <td>${veh.placa}</td>
    //                     <td>${veh.marca}</td>
    //                     <td>${veh.modelo}</td>
    //                     <td>${veh.precio}</td>
    //                     <td>${veh.color}</td>
    //                     <td>${veh.fabricacion}</td>

    //             `;
    //         }
    //         placeholder.innerHTML = out;
    // })