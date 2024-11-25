import {toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successMessage = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "black",  
        transition: Bounce,
        });
}

export const errorMessage = (message) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "black",
        transition: Bounce,
        });
}