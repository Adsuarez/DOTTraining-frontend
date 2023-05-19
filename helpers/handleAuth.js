import { signin } from "../services/users.js";

export const handleSignin = (event) => {
  event.preventDefault();
  const { signinFormEmail: email, signinFormPassword: password } =
    Object.fromEntries(new FormData(event.target));
  signin({ email, password });
};
