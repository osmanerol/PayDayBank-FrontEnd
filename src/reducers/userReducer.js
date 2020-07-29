import { LOG_IN_PENDING, LOG_IN_FULFILLED, LOG_IN_REJECTED, LOG_OUT_FULFILLED } from '../actions/userAction';

const initialState={
    isLoggedIn:false,
    token:null,
    error:false
}

export default (state=initialState,action)=>{
    switch(action.type){
        case LOG_IN_PENDING:
            return {
                ...state,
                isLoggedIn:false,
            }
        case LOG_IN_FULFILLED:
            let token,error;
            if(action.payload.headers){
                token=action.payload.headers.authorization;
                error=false;
            }
            else{
                error=true;
                token=null;
            }
            return {
                ...state,
                isLoggedIn:action.payload.status===200 ? true : false,
                token:token,
                error:error
            }
        case LOG_IN_REJECTED:
            return {
                ...state,
            }
        case LOG_OUT_FULFILLED:
            return {
                ...state,
                isLoggedIn:false,
                token:null,
                error:false
            }
        default:
            return state
    }
}