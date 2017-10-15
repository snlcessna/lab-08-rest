'use strict';

const Note = require('../note/model.js');
const router = require('../lib/router.js');
const parser = require('../lib/parse-request');
let notes = {};

router.POST('/api/notes', (req,res) => {
//pass data as stringifed JSON in the body of a POST request to create a new resource
    if(!req.body) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('No content found.');
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(`Found content: ${req.body}`);
        new Note;
        res.end();
    }
    // 400 when?
    // Save the note to the stack
    // Send 200

});
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


});

router.GET('/api/notes', (req,res) => {
  parser(req);
    if (Object.keys(req.url.query).length > 0) {
      if(typeof notes[req.url.query['uuid']] === 'undefined'){
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Note not found')
        res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(notes[req.url.query['uuid']]);
      res.end();
    }
  } else {
      //if no query exists, send all responses
      if(Object.keys(notes).length > 0){
        for (var note in notes) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write(notes.note);
        }
      }else{
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.write('You do not have any notes');
        res.end();
      }
      res.end();
  }
    // If we have an id
    // try and pull it from the stack
    // send it
    // 404 not found or 400 invalid query?

    // List all

});

module.exports = router;
