import { signin } from "../services/users.js";

export function SignInForm() {
  const handleSignin = (event) => {
    event.preventDefault();
    const { signinFormEmail: email, signinFormPassword: password } =
      Object.fromEntries(new FormData(event.target));
    signin({ email, password });
  };

  return (
    <>
      <h2>Registro</h2>
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
