const BASE_URL = "http://localhost:3333/api/users";

export function login({ email, password }) {
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((json) => console.log({ json }))
    .catch((error) => console.error(error));
}

export async function signin({ email, password }) {
  return fetch(BASE_URL, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({ email, password }),
  });
}
