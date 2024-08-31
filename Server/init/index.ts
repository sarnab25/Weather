import mongoose from "mongoose"
import dotenv from 'dotenv'
import sampleData from "./data.ts";
import Locality from "../models/locality.ts";
dotenv.config()


const dbURL = process.env.ATLAS_URL;

connectDatabase().then(()=>
{
    console.log("Connected to DB")
}).catch(err => console.log(err));

 export async function connectDatabase() {
    if (!dbURL) {
        throw new Error('ATLAS_URL environment variable is not set');
      }
  await mongoose.connect(dbURL);

}

const initDB= async()=>
{
try {
    await Locality.insertMany(sampleData)
    console.log("Data Initialized")
} catch (error) {
    console.error("Error Initialiizing " , error)
}
}

initDB();