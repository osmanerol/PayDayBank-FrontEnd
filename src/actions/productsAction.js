import axios from 'axios';

export const GET_PRODUCTS_PENDING='GET_PRODUCTS_PENDING';
export const GET_PRODUCTS_FULFILLED='GET_PRODUCTS_FULFILLED';
export const GET_PRODUCTS_REJECTED='GET_PRODUCTS_REJECTED';

export const GET_PRODUCT_PENDING='GET_PRODUCT_PENDING';
export const GET_PRODUCT_FULFILLED='GET_PRODUCT_FULFILLED';
export const GET_PRODUCT_REJECTED='GET_PRODUCT_REJECTED';

export const UPDATE_PRODUCT_PENDING='UPDATE_PRODUCT_PENDING';
export const UPDATE_PRODUCT_FULFILLED='UPDATE_PRODUCT_FULFILLED';
export const UPDATE_PRODUCT_REJECTED='UPDATE_PRODUCT_REJECTED';

export const getAllProducts=()=>{
    return dispatch=>{
        dispatch({
            type:'GET_PRODUCTS',
            payload:axios.get('http://localhost:8080/api/products',{headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem('jwtToken')
            }}).then(response=>response)
            .catch(error=>error)
        })
    }
}

export const getProductById=(id)=>{
    return dispatch=>{
        dispatch({
            type:'GET_PRODUCT',
            payload:axios.get(`http://localhost:8080/api/products/${id}`,{headers:{
                'Content-Type':'application/json',
                'Authorization':localStorage.getItem('jwtToken')
            }}).then(response=>response)
            .catch(error=>error)
        })
    }
}

export const updateProduct=(id,name,price,available,description)=>{
    return dispatch=>{
        dispatch({
            type:'UPDATE_PRODUCT',
            payload:axios.put('http://localhost:8080/api/products/updateproduct',{id,name,price,available,description},{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem('jwtToken')
                }
            }).then(response=>response)
            .catch(error=>error)
        })
    }
}