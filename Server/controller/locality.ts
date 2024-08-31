import Locality from "../models/locality";
import { Request, Response } from 'express';

const getallLocalities =async(req: Request, res: Response)=>
{

    
        try {
            const allLocalities= await Locality.find({})
            res.status(200).json(allLocalities)
        } catch (error) {
            console.error("Can't fetch", error);
            res.status(500).json({ message: "Failed to fetch localities" });        }
    }
   


export default getallLocalities