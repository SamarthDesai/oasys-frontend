import {Cookies} from 'react-cookie';

// return true on success and false on failure
export async function login(username, password) {
  let success = true;
  // TODO (Ben): might be able to convert content type to json
  // and use RestUtils
  await fetch("http://localhost:8080/oauth/token", {
    method: "POST",
    body: `username=${username}&password=${password}&grant_type=password`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Requested-With": "XMLHttpRequest",
      // TODO (Ben): we really shouldn't expose these secrets client-side lol
      Authorization: "Basic " + Buffer.from("oasys:XY7kmzoNzl100").toString("base64")
    },
    mode: "cors"
  })
    .then(response => response.json())
    .then(responseJson => {
      // Make sure the response contains a token
      if (responseJson.access_token == null) {
        success = false;
        return;
      }
      // Store auth token in cookie
      const cookies = new Cookies();
      const now = new Date();
      // If there are errors it's likely because expires_in is miliseconds already
      // but it seems like it's in seconds
      const storeUntil = now.getTime() + responseJson.expires_in * 1000;
      const expiryDate = new Date(storeUntil);
      cookies.set("JSESSIONID", responseJson.access_token, {
        path: "/",
        expires: expiryDate
      });
    })
    .catch(error => {
      console.error(error);
      success = false;
    });
  return success;
}

export function getAuthHeaderValue() {
  return "Bearer " + getToken();
}

export function getToken() {
  const cookies = new Cookies();
  return cookies.get("JSESSIONID");
}

export function userHasAuthenticated() {
  return getToken() !== undefined;
}


