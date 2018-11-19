import { Cookies } from 'react-cookie';

export function getAuthHeaderValue() {
  const cookies = new Cookies();
  return "Bearer " + cookies.get("JSESSIONID");
}
