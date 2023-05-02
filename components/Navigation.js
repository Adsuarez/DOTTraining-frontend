import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create training",
    route: "/trainingForm",
  },
];

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map((link) => (
          <li key={link.route}>
            <Link href={link.route}>
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
