const STATE = "ESSENTIALISM";

export const setState = (state) => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem(STATE, stringifiedState);
  } catch (err) {
    console.log(err);
  }
};
export const getState = () => {
  try {
    const userObject = localStorage.getItem(STATE);
    if (userObject === null) {
      return undefined;
    }
    const parsedObj = JSON.parse(userObject);
    return parsedObj;
  } catch (err) {
    return undefined;
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};
export const clearAppState = () => {
  try {
    localStorage.removeItem(STATE);
    window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
};

// const useLocalStorage = (key, initialValue) => {

//     const [storedValue, setStoredValue] = useState(() => {
//         // Get from local storage by key
//         const item = window.localStorage.getItem(key);
//         // Parse and return stored json or, if undefined, return initialValue
//         return item ? JSON.parse(item) : initialValue;

//     })

//     const setValue = value => {
//         setStoredValue(value);
//         window.localStorage.setItem(key, JSON.stringify(value));
//     };

//     return [storedValue, setValue]
// }
