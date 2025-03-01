
import RootLayoutClient from "../app/layoutClient";
import styles from "./page.module.css";

export default function Home() {
  return (
    <RootLayoutClient>
      <div className={styles.page}>
          <h1>Home page</h1>
      </div>
    </RootLayoutClient>
  );
}
