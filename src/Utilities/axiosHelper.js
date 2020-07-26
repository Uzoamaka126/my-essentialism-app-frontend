import Axios from "axios";
import { getState } from "./localStorage";

// console.log(process.env.REACT_APP_API_URL)

export function client() {
    const { token } = getState().data;
  const axiosInstance = Axios.create({
    baseURL: "https://essentialism-user-app.herokuapp.com/api",
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Authorization": token
    },
  });

  return axiosInstance;
}
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

// Add an interceptor
// Axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (error.response && error.response.status === 401) {
//       debugger;
//       window.location.href = "/login";
//     }
//     if (error.response && error.response.data) {
//       debugger;
//       return Promise.reject(error.response.data.message);
//     }
//     return Promise.reject(error.message);
//   }
// )