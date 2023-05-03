import { login, signin } from "../services/users.js";

export const handleLogin = (event) => {
  event.preventDefault();
  const { loginFormEmail: email, loginFormPassword: password } =
    Object.fromEntries(new FormData(event.target));
  login({ email, password });
};

export const handleSignin = (event) => {
  event.preventDefault();
  const { signinFormEmail: email, signinFormPassword: password } =
    Object.fromEntries(new FormData(event.target));
  signin({ email, password });
};
