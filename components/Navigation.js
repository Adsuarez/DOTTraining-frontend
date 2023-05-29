import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const links = [
  {
    label: "Home",
    route: "/",
    authRequired: 0,
  },
  {
    label: "Create training",
    route: "/new-training",
    authRequired: 1,
  },
  {
    label: "Authentication",
    route: "/auth",
    authRequired: 0,
  },
];

export default function Navigation() {
  const { user } = useContext(UserContext);
  const permissions = user ? user.permissions : 0;

  return (
    <nav className={styles.nav}>
      <ul>
        {links.map((link) => {
          if (link.authRequired == permissions) {
            return (
              <li key={link.route}>
                <Link href={link.route}>
                  <p>{link.label}</p>
                </Link>
              </li>
            );
          } else if (link.authRequired == 0) {
            return (
              <li key={link.route}>
                <Link href={link.route}>
                  <p>{link.label}</p>
                </Link>
              </li>
            );
          }
        })}
        <li>{user?.username}</li>
      </ul>
    </nav>
  );
}
