const AuthReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                isFetching:true,
                error:false
            }
            default:
                return(
                    state
                )
            
        case "LOGIN_FAILURE":
            return({
                user:null,
                isFetching:false,
                error:true
            })

            
        case "LOGIN_SUCCESS":
            return({
                user:action.payload,
                isFetching:false,
                error:false
            })
    }
}
export default AuthReducer