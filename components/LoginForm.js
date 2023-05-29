import { useState, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { login } from "@/services/users.js";

const INITIAL_ERROR_STATE = { status: false, message: "📝" };
export default function LoginForm() {
  const { user, updateUser } = useContext(UserContext);
  const [error, setError] = useState(INITIAL_ERROR_STATE);

  const handleLogin = (event) => {
    event.preventDefault();
    const { loginFormEmail: email, loginFormPassword: password } =
      Object.fromEntries(new FormData(event.target));
    login({ email, password }).then((jsonResponse) => {
      if (jsonResponse.errorMessage) {
        setError({ status: true, message: `❌ ${jsonResponse.errorMessage}` });
        return updateUser(null);
      }

      if (jsonResponse.token) {
        setError({
          status: false,
          message: "✔️ hello, you are logged correctly",
        });
        window.localStorage.setItem(
          "loggedDOTTrainingUser",
          JSON.stringify(jsonResponse)
        );
        return updateUser(jsonResponse);
      }
    });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    updateUser(null);
    window.localStorage.removeItem("loggedDOTTrainingUser");
    return setError(INITIAL_ERROR_STATE);
  };

  return (
    <>
      {!user ? (
        <>
          <h2>Inicio de sesión</h2>
          <p>{error.message}</p>
          <form method="GET" onSubmit={handleLogin}>
            <label>email:</label>
            <input
              name="loginFormEmail"
              type="email"
              placeholder="example@domain.com"
            />
            <label>password:</label>
            <input name="loginFormPassword" type="password" />
            <button>Iniciar sesión</button>
          </form>
        </>
      ) : (
        <form onSubmit={handleLogout}>
          <button>Cerrar sesión</button>
        </form>
      )}
    </>
  );
}
