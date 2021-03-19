const express = require('express')
var cors = require('cors')
const user_router = require('../routes/user.routes');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';
        // Middlewares 
        // Los middlewares son funciones que agregan funcionalidad a mi web server, siempre se ejecutan cada que levantamos nuestro servidor
        this.middlewares();
        // Rutas de mi app
        this.routes();
    }

    middlewares(){
        this.app.use(cors())
        // Lectura y parceo del body

        this.app.use(express.json() );

        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath,user_router);
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        });
    }
}

module.exports=Server;