const functions = require('firebase-functions');
const express = require('express');
const app = express();
var fs = require('fs');


app.get('/', (request, response) => {
// var contents = fs.readFileSync('/test.html', 'utf8');

// var fs = require('fs'),
filePath = './srcCode/loginPage/loginHtml.html';

// this for async way
/*fs.readFile(filePath, 'utf8', function (err, data) {
if (err) throw err; console.log(data);
});*/

//this is sync way
var readFileSourceCode = fs.readFileSync(filePath, 'utf8');

response.send(readFileSourceCode);

})
// app.listen('4000')
exports.app = functions.https.onRequest(app);
