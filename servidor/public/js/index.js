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
            location.href = '/chat'}
            ,2000)
        }
    })
}






