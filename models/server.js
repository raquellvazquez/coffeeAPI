const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        /**
         * Data Base
         */
        this.connectMongo();

        /**
         * Midellware
         */
       this.middlewares();

       /**
        * Rutas
        */
        this.routes()
    }

    async connectMongo() {
        await dbConnection();
    }

    routes() {
       this.app.use(this.userPath, require('../routes/user.routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('escuchando en puerto', this.port)
        })
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }
}

module.exports = Server;