/*global beforeAll,afterAll,expect*/
'use strict';

const expect = require('expect');
const server = require("../lib/server");
const superagent = require("superagent");
require('dotenv').config();

describe('Testing Lab 8 POST', () => {
    before((done) => {
        server.start(process.env.PORT || 5000);
        done();
    });

    after((done) => {
        server.stop();
        done();
    });

    it('', () => {

    });

});

describe('Testing Lab 8 GET', () => {
    before((done) => {
        server.start(process.env.PORT || 5000);
        done();
    });

    after((done) => {
        server.stop();
        done();
    });

    it('', () => {

    });

});

describe('Testing Lab 8 DELETE', () => {
    before((done) => {
        server.start(process.env.PORT || 5000);
        done();
    });

    after((done) => {
        server.stop();
        done();
    });

    it('', () => {

    });

});