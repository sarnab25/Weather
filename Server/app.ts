import mongoose from "mongoose"
import dotenv from 'dotenv'
import Locality from "./models/locality";
import express from 'express'
const app=express()
import cors from 'cors'
import bodyParser from "body-parser";
import localityRoute from './routes/locality'
dotenv.config()


const dbURL = process.env.ATLAS_URL;

app.listen(2020, ()=>
{
    console.log("server is listening on port 2020")
})

main().then(()=>
{
    console.log("Connected to DB")
}).catch(err => console.log(err));

 export async function main() {
    if (!dbURL) {
        throw new Error('ATLAS_URL environment variable is not set');
      }
  await mongoose.connect(dbURL);

}

app.use(cors())
app.use(bodyParser.json())
app.use('/locality', localityRoute)