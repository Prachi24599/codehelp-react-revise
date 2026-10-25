//Create a server in http node.js without installing express or any other framework
//http is node js built in module
const http = require("http");
//create a server
const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("Hello from Node.js Http Server, This is HOME Page");
    }else if(req.url === "/about" && req.method === "GET"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("About Page");
    }else{
        res.writeHead(404, {"Content-Type" : "text/plain"});
        res.end("404 - Page not found")
    }
 
})
//start the server
server.listen(3000, () => {
    console.log("Server running on port 3000");
})