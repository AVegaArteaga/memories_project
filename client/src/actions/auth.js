import * as api from '../api';
import {AUTH} from '../constants/actionTypes';
// import { Navigate } from 'react-router-dom';

export const signin = (formData, navigate) => async(dispatch) => {

    //const navigate = Navigate()
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: AUTH, data})

        navigate('/');
    } catch (error) {
        console.log(error)
    }

}

export const signup = (formData, navigate) => async(dispatch) => {

    //const navigate = Navigate()
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data})

        navigate('/');
    } catch (error) {
        console.log(error)
    }



}