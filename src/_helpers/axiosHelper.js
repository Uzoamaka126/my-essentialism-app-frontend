import axios from 'axios';
import { getToken } from './authenticationChecker'
export const withAuth = () => {
    // const token = localStorage.getItem('token');
    const token = getToken();

    const instance = axios.create({
        headers: {
            Authorization: token || '',
        }
    })
    return instance;
}