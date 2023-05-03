export function login({ email, password }) {
  console.log({ email, password });
}

export function signin({ email, password }) {
  console.log("from signin: ", { email, password });
}
