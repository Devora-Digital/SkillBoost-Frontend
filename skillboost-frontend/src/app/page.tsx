
import RootLayoutClient from "../app/layoutClient";
import styles from "./page.module.css";

export default function Home() {
  return (
    <RootLayoutClient>
      <div className={styles.page}>
          <div>Banner</div>
          <div className={styles.statistic_block}>
              <div className={styles.inside_block}>
                  <p className={styles.numbers_section}>250+</p>
                  <p className={styles.description_section}>Courses by our best mentors</p>
              </div>
              <div className={styles.vertical_line}></div>
              <div className={styles.inside_block}>
                  <p className={styles.numbers_section}>1000+</p>
                  <p className={styles.description_section}>Courses by our best mentors</p>
              </div>
              <div className={styles.vertical_line}></div>
              <div className={styles.inside_block}>
                  <p className={styles.numbers_section}>15+</p>
                  <p className={styles.description_section}>Courses by our best mentors</p>
              </div>
              <div className={styles.vertical_line}></div>
              <div className={styles.inside_block}>
                  <p className={styles.numbers_section}>2400+</p>
                  <p className={styles.description_section}>Courses by our best mentors</p>
              </div>
          </div>
          <div>Top Categories</div>
          <div>Top Courses</div>
          <div>Top Instructors</div>
          <div>Promotions</div>
      </div>
    </RootLayoutClient>
  );
}
