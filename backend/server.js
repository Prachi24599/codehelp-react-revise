//server instantiate
const express = require("express");
const app = express();
const PORT = 5000;

//used to parse request.body in express -> PUT / POST
const bodyParser = require("body-parser");

//specifically parse json data and add it to the request.body obejct
app.use(bodyParser.json());

//activate server on 3000 port
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

//Routes
app.get("/", (request, response) => {
    response.send("Hello, This is first get req")
});

app.post("/api/cars", (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully!");
})

//connect to mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDatabase", {}).then(() => {
    console.log("Connection Successful")
})
.catch((err) => {
    console.log("Received an Error", err)
})