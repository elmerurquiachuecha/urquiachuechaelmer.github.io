function crearCuenta(){
    Swal.fire({
        icon: 'success',
        text: 'Tu cuenta fue creada con exito',
        showConfirmButton: false,
        timer: 1500
      })
    setTimeout(()=> {
        location.href="index.html";
    },1600);
    
}


$("#animPago").click(function () {
  let timerInterval;  
  Swal.fire({
    title: 'Procesando el pago!',
    html: '<b></b>',
    timer: 4000,
    timerProgressBar: true,
    backdrop: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = "•"
          timerInterval = setInterval(() => {
            b.textContent = "• •"
            timerInterval = setInterval(() => {
              b.textContent = "• • •"
              timerInterval = setInterval(() => {
                b.textContent = "• • • •"
                timerInterval = setInterval(() => {
                  b.textContent = "• • • • •"
                  timerInterval = setInterval(() => {
                    b.textContent = "• • • • • •"
                    timerInterval = setInterval(() => {
                      b.textContent = "• • • • • • •"
                      timerInterval = setInterval(() => {
                        b.textContent = "• • • • • • • •"
                      }, 500)
                    }, 500)
                  }, 500)
                }, 500)
              }, 500)
            }, 500)
          }, 500)
      }, 500)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then(() => {
    Swal.fire({
      icon: 'success',
      text: 'Tu pago se realizo con exito',
      showConfirmButton: false,
      timer: 1700,
      backdrop: true
    });
    
  })
})


