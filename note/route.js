'use strict';

const Note = require('../note/model.js');
const router = require('../lib/router.js');

let notes = {};

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
  res.end();
    // If we have an id
        // try and pull it from the stack
            // send it
        // 404 not found or 400 invalid query?

    // List all

});

module.exports = router;
