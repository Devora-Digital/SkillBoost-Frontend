
import RootLayoutClient from "../app/layoutClient";
import Image from "next/image";
import { LucideTelescope } from "lucide-react";
import { LucideCode } from "lucide-react";
import { LucideBriefcase } from "lucide-react";
import { LucideAtom } from "lucide-react";
import TopCoursesImage from "../../public/Homepage/TopCoursesImage_01.jpeg"
import styles from "./page.module.css";

export default function Home() {
    const imageStyleFirst = {
        borderRadius: '8px'
    }
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
              <div className={styles.categories_items_block}>
                <div className={styles.categories_item}>
                    <div className={styles.categories_item_inside}>
                        <div className={styles.icon_circle_place}>
                            <div>
                                <LucideTelescope />
                            </div>
                        </div>
                        <p className={styles.category_item_title}>Astrology</p>
                        <p className={styles.category_item_count}>11 Courses</p>
                    </div>
                </div>
                <div className={styles.categories_item}>
                    <div className={styles.categories_item_inside}>
                        <div className={styles.icon_circle_place}>
                            <div>
                                <LucideCode />
                            </div>
                        </div>
                        <p className={styles.category_item_title}>Development</p>
                        <p className={styles.category_item_count}>12 Courses</p>
                    </div>
                </div>
                <div className={styles.categories_item}>
                    <div className={styles.categories_item_inside}>
                        <div className={styles.icon_circle_place}>
                            <div>
                                <LucideBriefcase />
                            </div>
                        </div>
                        <p className={styles.category_item_title}>Marketing</p>
                        <p className={styles.category_item_count}>12 Courses</p>
                    </div>
                </div>
                <div className={styles.categories_item}>
                    <div className={styles.categories_item_inside}>
                        <div className={styles.icon_circle_place}>
                            <div>
                                <LucideAtom />
                            </div>
                        </div>
                        <p className={styles.category_item_title}>Physics</p>
                        <p className={styles.category_item_count}>14 Courses</p>
                    </div>
                </div>
              </div>
          </div>
          <div className={styles.courses_block}>
              <div className={styles.courses_control_block}>
                  <p className={styles.courses_title}>Top Courses</p>
                  <button className={styles.all_courses_button}>See All</button>
              </div>
              <div className={styles.courses_items_block}>
                <div className={styles.courses_item}>
                    <div className={styles.courses_item_inside}>
                        <Image src={TopCoursesImage} width={266} height={139} style={imageStyleFirst} alt="Top Course 01"/>
                        <div className={styles.courses_item_info}>
                            <div className={styles.courses_item_info_inside}>
                                <div className={styles.courses_item_info_first_block}>
                                    <p className={styles.courses_item_title}>Beginners Guide to Design</p>
                                    <p className={styles.courses_item_author}>By Ronald Richards</p>
                                </div>
                                <div className={styles.courses_item_info_second_block}>
                                    <div></div>
                                    <p className={styles.courses_item_rating}>(1200 Ratings)</p>
                                </div>
                                <p className={styles.courses_item_hours}>22 Total Hours. 155 Lectures. Beginner</p>
                            </div>
                            <p className={styles.courses_item_price}>$149.9</p>
                        </div>
                    </div>
                </div>
                <div className={styles.courses_item}>
                    <div className={styles.courses_item_inside}>
                        <Image src={TopCoursesImage} width={266} height={139} style={imageStyleFirst} alt="Top Course 01"/>
                        <div className={styles.courses_item_info}>
                            <div className={styles.courses_item_info_inside}>
                                <div className={styles.courses_item_info_first_block}>
                                    <p className={styles.courses_item_title}>Beginners Guide to Design</p>
                                    <p className={styles.courses_item_author}>By Ronald Richards</p>
                                </div>
                                <div className={styles.courses_item_info_second_block}>
                                    <div></div>
                                    <p className={styles.courses_item_rating}>(1200 Ratings)</p>
                                </div>
                                <p className={styles.courses_item_hours}>22 Total Hours. 155 Lectures. Beginner</p>
                            </div>
                            <p className={styles.courses_item_price}>$149.9</p>
                        </div>
                    </div>
                </div>
                <div className={styles.courses_item}>
                    <div className={styles.courses_item_inside}>
                        <Image src={TopCoursesImage} width={266} height={139} style={imageStyleFirst} alt="Top Course 01"/>
                        <div className={styles.courses_item_info}>
                            <div className={styles.courses_item_info_inside}>
                                <div className={styles.courses_item_info_first_block}>
                                    <p className={styles.courses_item_title}>Beginners Guide to Design</p>
                                    <p className={styles.courses_item_author}>By Ronald Richards</p>
                                </div>
                                <div className={styles.courses_item_info_second_block}>
                                    <div></div>
                                    <p className={styles.courses_item_rating}>(1200 Ratings)</p>
                                </div>
                                <p className={styles.courses_item_hours}>22 Total Hours. 155 Lectures. Beginner</p>
                            </div>
                            <p className={styles.courses_item_price}>$149.9</p>
                        </div>
                    </div>
                </div>
                <div className={styles.courses_item}>
                    <div className={styles.courses_item_inside}>
                        <Image src={TopCoursesImage} width={266} height={139} style={imageStyleFirst} alt="Top Course 01"/>
                        <div className={styles.courses_item_info}>
                            <div className={styles.courses_item_info_inside}>
                                <div className={styles.courses_item_info_first_block}>
                                    <p className={styles.courses_item_title}>Beginners Guide to Design</p>
                                    <p className={styles.courses_item_author}>By Ronald Richards</p>
                                </div>
                                <div className={styles.courses_item_info_second_block}>
                                    <div></div>
                                    <p className={styles.courses_item_rating}>(1200 Ratings)</p>
                                </div>
                                <p className={styles.courses_item_hours}>22 Total Hours. 155 Lectures. Beginner</p>
                            </div>
                            <p className={styles.courses_item_price}>$149.9</p>
                        </div>
                    </div>
                </div>
              </div>
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
