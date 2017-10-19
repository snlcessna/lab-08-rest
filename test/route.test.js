/*global beforeAll,afterAll,expect*/
'use strict';

const expect = require('expect');
const server = require('../lib/server');
const request = require('superagent');
require('dotenv').config();

// describe('Testing Lab 8 POST', () => {
//     before((done) => {
//         server.start(process.env.PORT || 5000);
//         done();
//     });

//     after((done) => {
//         server.stop();
//         done();
//     });

//     it('', () => {

//     });

// });

// describe('Testing Lab 8 GET', () => {
//     before((done) => {
//         server.start(process.env.PORT || 5000);
//         done();
//     });

//     after((done) => {
//         server.stop();
//         done();
//     });

//     it('If they did not pass a query, it should tell the user if there are no notes', (done) => {
//       request.get('localhost:3000/api/notes').end(function(err, res) {
//         if(res.status == 400) {
//           expect(res.text).toEqual('You do not have any notes');//self-explanatory
//         } else {
//           expect(res.text).toEqual('postit'); //If user doesn't enter query, we're logging every note; that is what this represents
//         } done();
//       });
//     });

//     it('If the user does pass a query, it should return it to the user', (done) => {
//       request.get('localhost:3000/api/notes?uuid=123').end(function(err, res) {
//         expect(res.text).toEqual('postit');
//         done();
//       });
//     });

//     it('If the user requests an id that does not exist it should return an error message to the user', (done) => {
//       request.get('localhost:3000/api/notes?uuid=234').end(function(err, res) {
//         expect(res.text).toEqual('Note not found');
//         done();
//       });
//     });


// });

describe('Testing Lab 8 DELETE', () => {
    before((done) => {
        server.start(process.env.PORT || 5000);
        done();
    });

    after((done) => {
        server.stop();
        done();
    });

    // error if no ?uuid= passed in POSt
    it('Should Ask user to POST parameters if no body on POSt', (done) => {
        request.delete('localhost:3000/api/notes').end((err, res) => {
            expect(res.text).toEqual('Please send a ?uuid= parameter with your POST request');
            done();
        });
    });

    //error if note not found
    it('Should reply that no note was found if uuid does not exist', (done) => {
        request.delete('localhost:3000/api/notes?uuid=234234234').end((err, res) => {
            expect(res.text).toEqual('Note not found. Please try another uuid');
            done();
        });
    });

    // note is correctly deleted
    it('Shoud reply that a note is successfully deleted when a uuid exists and is deleted', (done) => {
        request.delete('localhost:3000/api/notes?uuid=123').end((err, res) => {
            expect(res.text).toEqual('Note Deleted.');
            done();
        });
    });
});
