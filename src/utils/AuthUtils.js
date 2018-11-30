import {Cookies} from 'react-cookie';

export function getAuthHeaderValue() {
  return "Bearer " + getToken();
}

export function getToken() {
  const cookies = new Cookies();
  return cookies.get("JSESSIONID");
}
