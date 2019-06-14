const {io}= require('../server');

//Verificar que el cliente se conecto
io.on('connection',(client)=>{
    console.log('usuario conectado');
    //Se envia la informacion al cliente
    client.emit('enviarMensaje',{
        usuario:'Administrador',
        mensaje:'Bienvenido a esta aplicacion'
    })
    
    //Verifica que el cliente se desconecto
    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente y muestra el mensaje enviado desde el navegador
    client.on('enviarMensaje',(data,callback)=>{
        //console.log("llego al servidor: ",msj);
        console.log(data);

        client.broadcast.emit('enviarMensaje',{
            usuario: data.usuario,
            mensaje: data.mensaje
        })
        // if(msj.usuario){
        //     callback({
        //         resp:'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         resp:'Todo salio mal!!!!!!!!!!'
        //     });
        // }

      

    })

    

})