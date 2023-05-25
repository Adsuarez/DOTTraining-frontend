import { useState } from "react";
import { signin } from "../services/users.js";

export function SignInForm() {
  const [error, setError] = useState({ status: false, message: "📝" });
  const handleSignin = (event) => {
    event.preventDefault();
    const { signinFormEmail: email, signinFormPassword: password } =
      Object.fromEntries(new FormData(event.target));
    signin({ email, password }).then((jsonResponse) => {
      if (jsonResponse.errorMessage)
        return setError({
          status: true,
          message: `❌ ${jsonResponse.errorMessage}`,
        });
      return setError({
        status: false,
        message: `✔️ welcome, please login to continue`,
      });
    });
  };

  return (
    <>
      <h2>Registro</h2>
      {error.message}
      <form method="GET" onSubmit={handleSignin}>
        <label htmlFor="signinFormEmail">email:</label>
        <input
          name="signinFormEmail"
          type="email"
          placeholder="example@domain.com"
        />
        <label htmlFor="signinFormPassword">password:</label>
        <input name="signinFormPassword" type="password" />
        <button>Registro</button>
      </form>
    </>
  );
}
