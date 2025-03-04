
import RootLayoutClient from "../app/layoutClient";
import styles from "./page.module.css";

export default function Home() {
  return (
    <RootLayoutClient>
      <div className={styles.page}>
          <div>Banner</div>
          <div>Statistic</div>
          <div>Top Categories</div>
          <div>Top Courses</div>
          <div>Top Instructors</div>
          <div>Promotions</div>
      </div>
    </RootLayoutClient>
  );
}
