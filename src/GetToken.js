import { Cookies } from "react-cookie";

export const getAuthHeaderValue = () => {
  const cookies = new Cookies();
  return "Bearer " + cookies.get("JSESSIONID");
};
