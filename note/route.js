'use strict';

const Note = require('../note/model.js');
const router = require('../lib/router.js');
const parser = require('../lib/parse-request');
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
router.DELETE('/api/notes', (req,res) => {

    parser(req);

    if (Object.keys(req.url.query).length > 0) {
        if (typeof notes[req.url.query['uuid']] === 'undefined') {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('Note not found. Please try another uuid');
            res.end();
        } else {
            notes[req.url.query['uuid']] = null;
            delete notes[req.url.query['uuid']];
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Note Deleted');
            res.end();
        }
    } else {
        // nothing passed as ?parameter
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Please send a ?uuid= parameter with your POST request');
        res.end();
    }

    // if (req.url.query['uuid'].length > 0) {
    //     if (typeof notes[req.url.query['uuid']] === 'undefined') {
    //         res.writeHead(404, {'Content-Type': 'text/plain'});
    //         res.write('Note not found. Please try another uuid');
    //         res.end();
    //     } else {
    //         notes[req.url.query['uuid']] = null;
    //         delete notes[req.url.query['uuid']];
    //         res.writeHead(200, {'Content-Type': 'text/plain'});
    //         res.write('Note Deleted');
    //         res.end();
    //     }
        
    // } else {
    //     res.writeHead(400, {'Content-Type': 'text/plain'});
    //     res.write('Please enter an uuid with your POST request');
    //     res.end();
    // }

    res.end();

});
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
