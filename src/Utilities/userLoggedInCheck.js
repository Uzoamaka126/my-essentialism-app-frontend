import Cookies from "js-cookie";

export const isLogin = () => {
  if (Cookies.get("essentialismLog")) {
    return true;
  }
  return false;
};