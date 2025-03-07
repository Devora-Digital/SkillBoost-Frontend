
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
          <div className={styles.categories_block}>
              <div className={styles.categories_control_block}>
                  <p className={styles.categories_title}>Top Categories</p>
                  <button className={styles.all_categories_button}>See All</button>
              </div>
              <div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
              </div>
          </div>
          <div className={styles.courses_block}>
              <div className={styles.courses_control_block}>
                  <p className={styles.courses_title}>Top Courses</p>
                  <button className={styles.all_courses_button}>See All</button>
              </div>
              <div></div>
          </div>
          <div className={styles.instructors_block}>
              <div className={styles.instructors_control_block}>
                  <p className={styles.instructors_title}>Top Instructors</p>
                  <button className={styles.all_instructors_button}>See All</button>
              </div>
              <div></div>
          </div>
          <div>Promotions</div>
      </div>
    </RootLayoutClient>
  );
}
