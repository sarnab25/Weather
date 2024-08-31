import mongoose, {Document, Schema} from "mongoose"
interface LocalDoc extends Document 
{
    localityname:string;
    localId:string;
}
const localitySchema: Schema= new Schema ({

    localityname:
    {
        type:String,
        required:true,
    },

    localityId:
    {
type:String,
required:true,

    },
})

const Locality = mongoose.model<LocalDoc>('Locality', localitySchema)
export default Locality