import Axios from "axios";
import { getState } from "./localStorage";

// console.log(process.env.REACT_APP_API_URL)

// export function client() {
//   const { token } = getState().data;
//   const axiosInstance = Axios.create({
//     baseURL: "https://essentialism-user-app.herokuapp.com/api",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: token,
//     },
//   });

//   return axiosInstance;
// }

export async function client(url, { data, method, ...customConfig }) {
  const headers = {
    "content-type": "application/json",
    Authorization: "",
  };

  const getToken = JSON.parse(localStorage.getItem("ESSENTIALISM"));
  const token = getToken?.token;

  if (token) {
    headers.Authorization = token;
  }
  const config = {
    headers,
    method,
    data,
    url: `${process.env.REACT_APP_API_URL}/${url}`,
    ...customConfig,
  };

  try {
    const result = await Axios(config);
    const { data } = result;
    return data;
  } catch (error) {
    throw error;
  }
}

// Add an interceptor
Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/login";
    }
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data.message);
    }
    return Promise.reject(error.message);
  }
);

export const postCall = async (url, data, params, headers) => {
  document.body.classList.add("network-active");
  let finalData;
  if (process.env.isEncrypted === "true") {
    // let password = getReference();
    // let rsakey = rsaEncryption(password);
    // let encryptedData = await encryptData(password, data);
    // finalData = { data: encryptedData };
    // var keyvalue = { Key: rsakey };
    // headers = Object.assign(keyvalue);
  } else {
    finalData = data;
    headers = Object.assign("");
  }
  return Axios({
    method: "post",
    url: url,
    data: finalData,
    headers: headers,
    params: params,
  }).catch(function (error) {
    if (!error.response) {
      // network error
    } else {
      const { status } = error.response;
      console.log(status);
      return status;
    }
  });
};
