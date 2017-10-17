'use strict';

const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {

    return new Promise( (resolve, reject) => {

        // URL
        req.url = url.parse(req.url);
        req.url.query = queryString.parse(req.url.query);

        if (! ( req.method === "PUT" || req.method === "POST" || req.method === "PATCH" ) ) {
            resolve(req);
        }

        let text = "";

        // Build up text as we read data
        req.on("data", (buffer) => {
        text += buffer.toString();
        console.log(text);
        });
        // JSONify it, if the request is for application/json
        // Handle errors
        req.on("end", (buffer) => {
          try {
            // if (req.headers['content-type'] === 'application/json'){
              req.body = JSON.parse(text);
            // }
          resolve(req);
        }
        catch(e) {
          reject(e);
        }
        });

        req.on("error", reject);
    });

};
