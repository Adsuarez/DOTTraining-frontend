import { useState, useContext } from "react";
import { signin } from "@/services/users.js";
import { UserContext } from "@/context/UserContext.js";

export function SignInForm() {
  const { user } = useContext(UserContext);
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
      {!user && (
        <>
          <h2>Registro</h2>
          {error.message}
          <form method="GET" onSubmit={handleSignin}>
            <label>email:</label>
            <input
              name="signinFormEmail"
              type="email"
              placeholder="example@domain.com"
            />
            <label>password:</label>
            <input name="signinFormPassword" type="password" />
            <button>Registro</button>
          </form>
        </>
      )}
    </>
  );
}
