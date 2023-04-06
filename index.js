import express from "express";
import connection from "./database/db.js";
import cors from 'cors'

import Routes from './route/route.js'



const  PORT = 5000;

connection();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());

app.use('/', Routes)


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})