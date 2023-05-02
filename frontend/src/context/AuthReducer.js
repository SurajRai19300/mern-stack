 const AuthReducer = (state, action) =>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                isFectching: true,
                error: false,
            };

        case "LOGIN_SUCCESS":
            return{
                user: action.payload,
                isFectching:false,
                error: false
            };

        case "LOGIN_FAILURE":
            return{
                    user: null,
                    isFectching:false,
                    error: action.payload,
                };
        default:
            return state;
    }
};


export default AuthReducer;