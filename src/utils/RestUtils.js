import {getAuthHeaderValue} from "./AuthUtils";

export async function postJson(path, body, contentType="application/json", stringify = true) {
  let headers = {
    "X-Requested-With": "XMLHttpRequest",
    "Authorization": getAuthHeaderValue()
  };
  if (contentType != null) {
    headers["Content-Type"] = contentType;
  }
  return await fetch("http://localhost:8080" + path, {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    body: stringify ? JSON.stringify(body) : body
  }).then(response => {
      return response.text();
    }).catch(error => {
      console.log(error);
      return null;
    });
}
