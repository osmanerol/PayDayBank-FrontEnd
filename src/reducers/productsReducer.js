import { GET_PRODUCTS_PENDING , GET_PRODUCTS_FULFILLED, GET_PRODUCTS_REJECTED, GET_PRODUCT_PENDING , GET_PRODUCT_FULFILLED, GET_PRODUCT_REJECTED, UPDATE_PRODUCT_PENDING, UPDATE_PRODUCT_FULFILLED, UPDATE_PRODUCT_REJECTED } from '../actions/productsAction';


const initialState={
    productsList:[],
    loading:false,
    error:false,
    product:{},
    updateStatus:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        // get all products
        case GET_PRODUCTS_PENDING:
            return {
                ...state,
                loading:true,
                updateStatus:null
            }
        case GET_PRODUCTS_FULFILLED:
            let products=[],error=false;
            if(action.payload.status===200){
                products=action.payload.data;
            }
            else{
                error=true;
            }
            return {
                ...state,
                loading:false,
                productsList:products,
                error:error
            }
        case GET_PRODUCTS_REJECTED:
            return {
                ...state,
                loading:false
            }
        // get product by id
        case GET_PRODUCT_PENDING:
            return {
                ...state,
                loading:true
            }
        case GET_PRODUCT_FULFILLED:
            let product={},productError=false;
            if(action.payload.status===200){
                product=action.payload.data;
            }
            else{
                productError=true;
            }
            return {
                ...state,
                loading:false,
                product:product,
                error:productError
            }
        case GET_PRODUCT_REJECTED:
            return {
                ...state,
                loading:false
            }
        // update product
        case UPDATE_PRODUCT_PENDING:
            return {
                ...state,
                updateStatus:null
            }
        case UPDATE_PRODUCT_FULFILLED:
            return {
                ...state,
                updateStatus:action.payload.status===200 ? 200 : 0
            }
        case UPDATE_PRODUCT_REJECTED:
            return {
                ...state,
                updateStatus:null
            }
        default:
            return state;
    }
}