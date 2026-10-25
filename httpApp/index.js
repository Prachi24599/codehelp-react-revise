//Create a server in http node.js without installing express or any other framework
//http is node js built in module
const http = require("http");
//create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Hello from Node.js Http Server");
})
//start the server
server.listen(3000, () => {
    console.log("Server running on port 3000");
})