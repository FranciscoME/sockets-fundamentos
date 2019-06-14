        var socket = io();

        //on son para escuchar sucesos (conexion/desconexion)
        socket.on('connect',function () {
            console.log('Conectado al servidor');
        });

        //on son para escuchar sucesos (conexion/desconexion)
        socket.on('disconnect',function() {
            console.log('Perdimos conexion con el servidor');
        })

        //Emit son para enviar informacion al servidor
        socket.emit('enviarMensaje',{
            usuario:'Francisco',
            mensaje:'Hola mundo'
        }, function (resp) {
            console.log('Respuesta server',resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje',function(respmensje){
            console.log('Servidor: ', respmensje);
        })

