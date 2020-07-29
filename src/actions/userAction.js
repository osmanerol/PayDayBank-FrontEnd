import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const LOG_IN_ERROR='LOG_IN_ERROR';
export const SET_CURRENT_USER='SET_CURRENT_USER';

export const GET_USER_PENDING='GET_USER_PENDING';
export const GET_USER_FULFILLED='GET_USER_FULFILLED';
export const GET_USER_REJECTED='GET_USER_REJECTED';

export const UPDATE_USER_PENDING='UPDATE_USER_PENDING';
export const UPDATE_USER_FULFILLED='UPDATE_USER_FULFILLED';
export const UPDATE_USER_REJECTED='UPDATE_USER_REJECTED';

export const logIn=(username,password)=>{
    return dispatch=>{
        axios.post('http://localhost:8080/login',{ username,password })
            .then(response=>{
                // gelen token'i kullanmak icin degisken olarak saklamak
                const token=response.headers.authorization;
                // token'i localStorage saklama
                localStorage.setItem('jwtToken',token);
                // setAuthToken ile ileride kullanmak icin saklama
                setAuthToken(token);
                // token cozumleme
                const decoded=jwt_decode(token);
                // cozumlenen tokeni reducera iletmek icin
                localStorage.setItem("username",decoded.sub);
                dispatch(setCurrentUser(decoded));
            })
            .catch(error=>dispatch(setLoginError(error)))
    }
}

//  setCurrentUser
export const setCurrentUser=decoded=>{
    return dispatch=>{
        dispatch({
            type:SET_CURRENT_USER,
            payload:decoded
        })
    }
}

export const setLoginError=(error)=>{
    return dispatch=>{
        dispatch({
            type:LOG_IN_ERROR,
            payload:error
        })
    }
}

export const getUser=(username)=>{
    return dispatch=>{
        dispatch({
            type:'GET_USER',
            payload:axios.get(`http://localhost:8080/manager/getmanager/${username}`,{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('jwtToken')
                }
            }).then(response=>response)
            .catch(error=>console.log(error))
        })
    }
}

export const updateUser=(username,fullname,title,password)=>{
    return dispatch=>{
        dispatch({
            type:'UPDATE_USER',
            payload:axios.put('http://localhost:8080/manager/updatemanager',{username,fullname,title, password },{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('jwtToken')
                }
            }).then(response=>response)
            .catch(error=>error)
        })
    }
}