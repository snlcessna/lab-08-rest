'use strict';

const uuid = require("uuid/v1");

class Note {

    constructor(name) {
      this.id = uuid();

      this.title = title;
      this.date = new Date();
      this.content = content;
      this.name = name;


    }

    // Instance (prototype) Methods
    toString() {
    }

}

let newNote = new Note;

console.log(newNote);

module.exports = Note;
