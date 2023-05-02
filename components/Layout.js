import Navigation from "./Navigation.js";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
