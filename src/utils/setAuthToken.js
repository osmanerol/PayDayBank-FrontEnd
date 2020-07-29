import axios from 'axios';

//  login yaptıktan sonra her axios istegi için tokeni tutar
const setAuthToken=token=>{
    if(token){
        //  her axios istegi icin tokeni uygula
        axios.defaults.headers.common['Authorization']=token;
    }
    else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;