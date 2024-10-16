
const initialState={
    isLoggedIn:false,
    username:''
}

function authReducer(state=initialState,action){
    switch(action.type){
        case 'LOGIN':
            return{...state,
                isLoggedIn:true,
                username:action.username}
        case 'LOGOUT':
            return{...state,
                isloggIn:false,
                username:''
            }
        default : 
            return state
    }
}
export default authReducer;