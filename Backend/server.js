import express from "express"

import mongoose from "mongoose"

import cors from "cors"

import bodyParser from "body-parser"

import dotenv from "dotenv"

import route from "./routes/user.route.js"


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 8000;
const URL = process.env.URL

mongoose.connect(URL).then(() =>{
    
    console.log("connected to Port")

app.listen(port, ()=>{
    
    console.log(`Server is running on port: ${port}`);

})

}).catch(error => console.log(error));


app.use("/api", route)