'use strict';

const http = require("http");
const router = require("./router.js");
const note = require("../note/model.js");

let isRunning = false;

// Just get a server running
const app = http.createServer( router.route );


module.exports = {
    start: (port) => {
        return new Promise( (resolve, reject) => {
            (isRunning) ? resolve('Server is already running') : (app.listen(port, (err) => reject(err)), resolve(`Server is running on port: ${port}`));
        });
    },

    stop: () => {
        return new Promise( (resolve,reject) => {
            (isRunning) ? (app.close(), isRunning = false, resolve('Server stopped')) : reject('Server is already stopped');
            if (isRunning) reject('Server is still running for some reason. Try again');
        });

    }
}
