const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

app.get("/", (request, response) => {
    response.send("Hello, This is first get req")
});