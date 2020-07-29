import { LOG_IN_ERROR, SET_CURRENT_USER, GET_USER_PENDING, GET_USER_FULFILLED, GET_USER_REJECTED, UPDATE_USER_PENDING,  UPDATE_USER_FULFILLED, UPDATE_USER_REJECTED } from '../actions/userAction';

const initialState={
    error:false,
    username:'',
    fullname:'',
    title:'',
    password:'',
    status:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case LOG_IN_ERROR:
            return {
                ...state,
                error:true,
                status:null
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                error:false,
                user:action.payload,
                status:null
            }
        // get user
        case GET_USER_PENDING:
            return {
                ...state,
                status:null
            }
        case GET_USER_FULFILLED:
            return {
                ...state,
                username:action.payload.data.username,
                fullname:action.payload.data.fullname,
                title:action.payload.data.title,
                password:action.payload.data.password,
                status:null
            }
        case GET_USER_REJECTED:
            return {
                ...state,
                status:null
            }
        // update user
        case UPDATE_USER_PENDING:
            return {
                ...state,
                status:null
            }
        case UPDATE_USER_FULFILLED:
            return {
                ...state,
                status:action.payload.status===200 ? 200 : 0
            }
        case UPDATE_USER_REJECTED:
            return {
                ...state,
                status:null
            }
        default:
            return state;
    }
}

/*
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

*/

