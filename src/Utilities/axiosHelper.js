import Axios from 'axios';
import { getToken } from './authenticationChecker'
export const client = () => {
    const headers = {
        'content-type': 'application/json',
        'Authorization': ''
    };
    const token = getToken();

    if (token) {
        headers.Authorization = token;
    }

    return Axios.create({
        headers: headers,
        baseURL: `${process.env.REACT_APP_API_URL}/`
    });
}

export const buildConversationUrl = (url) => `${process.env.REACT_APP_CONVERSATION_API_URL}/api/v1/${url}`;
// export async function client(url, { data, method, ...customConfig }) {
//     const headers = {
//         'content-type': 'application/json',
//         'Authorization': ''
//     };

//     const token = getToken();

//     if (token) {
//         headers.Authorization = token;
//     }
//     const config = {
//         headers,
//         method,
//         data,
//         url: `${process.env.REACT_APP_API_URL}/${url}`,
//         ...customConfig,
//     };

//     try {
//         const result = await Axios(config);
//         const { data } = result;
//         return data;
//     } catch (error) {
//         throw error;
//     }
// }

Axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = '/login';
        }
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data.message);
        }
        return Promise.reject(error.message);
    }
);
