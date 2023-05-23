import { useState, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { login } from "@/services/users.js";

export default function LoginForm() {
  const { user, updateUser } = useContext(UserContext);
  const [error, setError] = useState({ status: false, message: "📝" });
  const handleLogin = (event) => {
    event.preventDefault();
    const { loginFormEmail: email, loginFormPassword: password } =
      Object.fromEntries(new FormData(event.target));
    login({ email, password }).then((json) => {
      console.log({ json });
      if (json.errorMessage) {
        setError({ status: true, message: `❌ ${json.errorMessage}` });
        return updateUser(null);
      }

      if (json.token) {
        setError({
          status: false,
          message: "✔️ hello, you are logged correctly",
        });
        return updateUser(json);
      }
    });
  };

  return (
    <>
      <h2>Inicio de sesión</h2>
      <p>{error.message}</p>
      <form method="GET" onSubmit={handleLogin}>
        <label htmlFor="loginFormEmail">email:</label>
        <input
          name="loginFormEmail"
          type="email"
          placeholder="example@domain.com"
        />
        <label htmlFor="loginFormPassword">password:</label>
        <input name="loginFormPassword" type="password" />
        <button>Iniciar sesión</button>
      </form>
    </>
  );
}
