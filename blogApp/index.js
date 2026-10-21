import dbConnect from "./config/databaseConfig";
import dotenv from "dotenv";
dotenv.config();
import express from express;
const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server started at port", PORT);
})

app.get("/", (req, res)=>{
    res.send("<h1>This is Homepage!!</h1>");
})

dbConnect();