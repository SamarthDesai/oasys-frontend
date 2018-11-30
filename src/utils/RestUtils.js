import {getAuthHeaderValue} from "./AuthUtils";

export async function postJson(path, body) {
  await fetch("http://localhost:8080" + path, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Authorization": getAuthHeaderValue()
    },
    mode: 'cors',
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(responseJson => {
      return responseJson;
    }).catch(error => {
      console.log(error);
      return null;
    });
}