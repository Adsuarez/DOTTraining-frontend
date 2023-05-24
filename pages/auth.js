import Layout from "../components/Layout";
import styles from "../styles/FormAuth.module.css";
import LoginForm from "@/components/LoginForm";
import { SignInForm } from "@/components/SignInForm";

export default function authPage() {
  return (
    <Layout>
      <h1>Gestión de sesión</h1>
      <div className={styles.div}>
        <LoginForm />
        <SignInForm />
      </div>
    </Layout>
  );
}
