//Lets require/import the HTTP module
var request = require('request');

var http = require('http');

//Lets define a port we want to listen to
const PORT=8081; 

//We need a function which handles requests and send response
function handleRequest(req, response){
    request({ uri: 'http://web:8080/' }, function(e, r) {
      if (e) {
        response.end(''+PORT+' '+e);
      } else {
        const b = r ? r.body : 'missing';
        response.end(''+PORT+' - It Works!! '+b+' Path Hit: ' + req.url);
      }
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
