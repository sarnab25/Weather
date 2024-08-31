import { Dispatch } from "redux";
import * as api from "@/app/api"

export const getallLocalities = ()=>async(dispatch:Dispatch)=>
{
    try {
        const {data}=await api.getallLocalities()
        dispatch({type:"FETCH_LOCALITIES", payload:data})
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error Fetching in frontend ", error.message);
        } else {
            console.error("Unexpected error: ", error);
        }
    }
}