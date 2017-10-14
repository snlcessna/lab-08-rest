'use strict';

const uuid = require("uuid/v1");

class Note {

    constructor(title, content, name) {
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

module.exports = Note;
