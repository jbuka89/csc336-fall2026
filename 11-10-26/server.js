import http from "http";
import fs from "fs";

function requestRecieved(request, response) {
    console.log("Request recieved!")


    let responseConfig  = {
        "Content-Type": "text/plain"
    }

    response.writeHead(200, responseConfig);
    response.end("This is a message from the server")
}

let server = http.createServer(requestRecieved)

server.listen(3000)


 