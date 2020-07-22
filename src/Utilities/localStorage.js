const STATE = 'ESSENTIALISM'

export const setState = state => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem(STATE, stringifiedState)
    return stringifiedState;
  } catch (err) {
    console.log(err)
  }
}
export const getState = () => {
  try {
    const userObject = localStorage.getItem(STATE);
    if (userObject === null) {
      return undefined;
    } 
    return JSON.parse(userObject);
  } catch (err) {
    return undefined;
  }
};

export const getToken = () => {
  if (getState()) {
    const { token } = getState();
    return token;
  }
  return null
}
 export const clearAppState = () =>{
  try {
    localStorage.removeItem(STATE);
    window.location.href = '/';
  } catch (err) {
    console.log(err)
  }
};