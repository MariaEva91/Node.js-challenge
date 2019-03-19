//get the message and send to the chat

$('#send').on('click',(e)=>{
    e.preventDefault();
    let mensaje = $('#text').val();
    console.log(mensaje);

    $('#messages').append('<li> ' + mensaje + '</li>');
})