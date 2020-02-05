import axios from 'axios';
import { getToken } from './authenticationChecker'
export const withAuth = () => {
    // const token = localStorage.getItem('token');
    const token = getToken();

    return axios.create({
        headers: {
            Authorization: token || '',
        },
    });
    // return instance;
};