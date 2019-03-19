//Get the name and save at local storage

$('#crearUsuario').on('click', function (e) {
    e.preventDefault();
    let nombre = $('#inputNombre').val();
    let apellido = $('#apellidoUsuario').val();
    let nombreUsuario = $('#nombreUsuario').val();
    let email = $('#emailUsuario').val();
    console.log(nombre, apellido, nombreUsuario, email)

    localStorage.setItem('nombre', nombreUsuario);

    //send to server by ajax

    $.ajax('http://localhost:3000/api/users', {
        method: "POST",
        data: {
            nombre: nombre,
            apellido: apellido,
            nombreUsuario: nombreUsuario,
            email: email
        }
    }).done(function () {
        $('#crearUsuario').on('click', function () {
            console.log('usuario creado');
            setTimeout(function () {
                location.href = '/chat'
            }, 1000)
        }
        )
    })
})

//delete a user

function eliminar(id){
    $.ajax('http://localhost:3000/api/users/'+ id,{
        method: 'DELETE',
        success: function(){
            $('#user-' + id).remove();
           console.log('el usuario se ha eliminado')
        setTimeout(function(){
            location.href = '/usuarios'}
            ,2000)
        }
    })
}







// let form = document.querySelector("form");

// form.addEventListener("submit", e => {
//     

//     let nombre = e.target[0].value;
//     let apellido = e.target[1].value;
//     let nombreUsuario = e.target[2].value;
//     let email = e.target[3].value;

//     console.log(nombre, apellido, nombreUsuario, email);

//     localStorage.setItem('nombre', nombreUsuario);


//    

//     let xhr = new XMLHttpRequest;
//     let user = {
//         nombre: nombre,
//         apellido: apellido,
//         usuario: nombreUsuario,
//         email: email
//     };



//     xhr.open("POST", user);
//     xhr.addEventListener("load", () => {
//         if (xhr.status === 200) {
//             console.log('ok')
//         }
//     })

//     xhr.send();

//   //  location.href = 'http://localhost:3000/chat';
// });
