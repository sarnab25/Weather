
const localityReducer =(state={data:[]},action:any)=>
    {
    switch(action.type)
    {
        case "FETCH_LOCALITIES":
            return {...state, data:action.payload}
    
            default:
                return state
    }
    }
    
    export default localityReducer