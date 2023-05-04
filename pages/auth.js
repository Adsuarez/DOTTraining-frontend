import { handleLogin, handleSignin } from "@/helpers/handleAuth";
import Layout from "../components/Layout";
import styles from "../styles/FormAuth.module.css";

export default function authPage() {
  return (
    <Layout>
      <h1>Gestión de sesión</h1>
      <div className={styles.div}>
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
      </div>
    </Layout>
  );
}
