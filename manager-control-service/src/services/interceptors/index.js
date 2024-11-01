import React from 'react'
//import { toast } from 'react-toastify';
//import { history} from '../../routes/DirectRoutes';


const errorHandler = (error) => {

    /*
    if (error.status === 401){
        // window.location.href = '/'
        
        toast.error(<div>{"You have been logged out, please login again"}</div>, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(function(){
            history.push('/app/signin');
            window.location.reload();
        }, 1000);


        return error.data
    } else if (error.status === 355){
        localStorage.setItem('email', error.data);
        toast.error(<div>{"Email Not Verified"}</div>, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(function () {
            history.push('/app/email-verify');
            window.location.reload();
        }, 1300);
        return error.data
       
    }else{
        toast.error(<div>{error.data.msg}</div>, {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return error.data
    } */
    
}

const successHandler = (response) => {
    /*
    if (response.showMessage === true){
        toast.success(<div>{response.msg}</div>, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return response
    */
}

export {
    errorHandler,
    successHandler,
}