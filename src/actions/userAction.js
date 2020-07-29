import axios from 'axios';

export const LOG_IN_PENDING='LOG_IN_PENDING';
export const LOG_IN_FULFILLED='LOG_IN_FULFILLED';
export const LOG_IN_REJECTED='LOG_IN_REJECTED';

export const LOG_OUT_FULFILLED='LOG_OUT_FULFILLED';

export function logIn(username,password){
    return dispatch=>{
        dispatch({
            type:'LOG_IN',
            payload:axios.post('http://localhost:8080/login',{ username,password })
            .then(response=>response)
            .catch(error=>error)
        })
    }
}

export function logOut(){
    return dispatch=>{
        dispatch({
            type:'LOG_OUT',
            payload:null
        })
    }
}