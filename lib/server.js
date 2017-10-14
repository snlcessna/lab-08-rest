'use strict';

const http = require("http");
const router = require("../note/route.js");
const note = require("../note/model.js");
const url = require("url");
let notes = {};

let isRunning = false;

// Just get a server running
const app = http.createServer( function(req, res) {
  req.url = url.parse(req.url);
  console.log(router.routeHandlers);
  console.log(router.routeHandlers[req.method]);
  (router.routeHandlers[req.method][req.url.pathname] ||
  router.couldNotFind)(req, res);
});

// router.post('/api/notes', (req,res) => {
//
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//
//     // 400 when?
//     // Save the note to the stack
//     // Send 200
//
// });
//
// router.delete('/api/notes', (req,res) => {
//     // Do I have an id?
//     // Is it valid
//     // Nuke it
//     // Send 200 if all is well
//
// });
//
// router.put('/api/notes', (req,res) => {
//     // Do I have an id?
//     // Is it valid
//     // Replace it
//     // Send 200 if all is well
//
// });
//
// router.patch('/api/notes', (req,res) => {
//     // Do I have an id?
//     // Is it valid
//     // Update it
//     // Send 200 if all is well
//
// });

router.GET('/', (req,res) => {
  res.write('You got through');
    // If we have an id
        // try and pull it from the stack
            // send it
        // 404 not found or 400 invalid query?

    // List all

});

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
