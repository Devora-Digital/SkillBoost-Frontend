
import RootLayoutClient from "../app/layoutClient";
import Image from "next/image";
import { Rating } from "@mui/material";
import { LucideTelescope } from "lucide-react";
import { LucideCode } from "lucide-react";
import { LucideBriefcase } from "lucide-react";
import { LucideAtom } from "lucide-react";
import { LucideChevronLeft } from "lucide-react";
import { LucideChevronRight } from "lucide-react";
import TopCoursesImage from "../../public/Homepage/TopCoursesImage_01.jpeg"
import TopInstructorsImage from "../../public/Homepage/InstructorImage_01.png"
import DesignerPhoto from "../../public/Homepage/Designer_image_01.jpeg"
import QuoteMarkIcon from "../../public/Homepage/ri_double-quotes-l.svg"
import styles from "./page.module.scss";

export default function Home() {
    const imageStyleFirst = {
        borderRadius: '8px'
    }
    const lineStyleFirst = {
        width: '100%',
        border: '1px solid #E2E8F0'
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
                                    <div>
                                        <Rating name="course-rating" defaultValue={2.5} />
                                    </div>
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
                                    <div>
                                        <Rating name="course-rating" defaultValue={2.5} />
                                    </div>
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
                                    <div>
                                        <Rating name="course-rating" defaultValue={2.5} />
                                    </div>
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
                                    <div>
                                        <Rating name="course-rating" defaultValue={2.5} />
                                    </div>
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
              <div className={styles.mentors_items_block}>
                <div className={styles.mentors_item}>
                    <div className={styles.mentors_item_inside}>
                        <Image src={TopInstructorsImage} width={177} height={132} style={imageStyleFirst} alt="Top Mentor 01" />
                        <div className={styles.mentors_item_info}>
                            <div className={styles.mentors_item_info_first_block}>
                                <p className={styles.mentors_item_title}>Ronald Richards</p>
                                <p className={styles.mentors_item_post}>UI/UX Designer</p>
                            </div>
                            <hr style={lineStyleFirst} />
                            <div className={styles.mentors_item_info_second_block}>
                                <div className={styles.mentors_item_rating_block}>
                                    <Rating name="mentor-rating" max={1} readOnly />
                                    <p className={styles.mentors_item_rating}>4.9</p>
                                </div>
                                <p className={styles.mentors_item_students_count}>2400 Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mentors_item}>
                    <div className={styles.mentors_item_inside}>
                        <Image src={TopInstructorsImage} width={177} height={132} style={imageStyleFirst} alt="Top Mentor 01" />
                        <div className={styles.mentors_item_info}>
                            <div className={styles.mentors_item_info_first_block}>
                                <p className={styles.mentors_item_title}>Ronald Richards</p>
                                <p className={styles.mentors_item_post}>UI/UX Designer</p>
                            </div>
                            <hr style={lineStyleFirst} />
                            <div className={styles.mentors_item_info_second_block}>
                                <div className={styles.mentors_item_rating_block}>
                                    <Rating name="mentor-rating" max={1} readOnly />
                                    <p className={styles.mentors_item_rating}>4.9</p>
                                </div>
                                <p className={styles.mentors_item_students_count}>2400 Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mentors_item}>
                    <div className={styles.mentors_item_inside}>
                        <Image src={TopInstructorsImage} width={177} height={132} style={imageStyleFirst} alt="Top Mentor 01" />
                        <div className={styles.mentors_item_info}>
                            <div className={styles.mentors_item_info_first_block}>
                                <p className={styles.mentors_item_title}>Ronald Richards</p>
                                <p className={styles.mentors_item_post}>UI/UX Designer</p>
                            </div>
                            <hr style={lineStyleFirst} />
                            <div className={styles.mentors_item_info_second_block}>
                                <div className={styles.mentors_item_rating_block}>
                                    <Rating name="mentor-rating" max={1} readOnly />
                                    <p className={styles.mentors_item_rating}>4.9</p>
                                </div>
                                <p className={styles.mentors_item_students_count}>2400 Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mentors_item}>
                    <div className={styles.mentors_item_inside}>
                        <Image src={TopInstructorsImage} width={177} height={132} style={imageStyleFirst} alt="Top Mentor 01" />
                        <div className={styles.mentors_item_info}>
                            <div className={styles.mentors_item_info_first_block}>
                                <p className={styles.mentors_item_title}>Ronald Richards</p>
                                <p className={styles.mentors_item_post}>UI/UX Designer</p>
                            </div>
                            <hr style={lineStyleFirst} />
                            <div className={styles.mentors_item_info_second_block}>
                                <div className={styles.mentors_item_rating_block}>
                                    <Rating name="mentor-rating" max={1} readOnly />
                                    <p className={styles.mentors_item_rating}>4.9</p>
                                </div>
                                <p className={styles.mentors_item_students_count}>2400 Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mentors_item}>
                    <div className={styles.mentors_item_inside}>
                        <Image src={TopInstructorsImage} width={177} height={132} style={imageStyleFirst} alt="Top Mentor 01" />
                        <div className={styles.mentors_item_info}>
                            <div className={styles.mentors_item_info_first_block}>
                                <p className={styles.mentors_item_title}>Ronald Richards</p>
                                <p className={styles.mentors_item_post}>UI/UX Designer</p>
                            </div>
                            <hr style={lineStyleFirst} />
                            <div className={styles.mentors_item_info_second_block}>
                                <div className={styles.mentors_item_rating_block}>
                                    <Rating name="mentor-rating" max={1} readOnly />
                                    <p className={styles.mentors_item_rating}>4.9</p>
                                </div>
                                <p className={styles.mentors_item_students_count}>2400 Students</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div className={styles.quotes_block}>
            <div className={styles.quotes_block_header}>
                <p className={styles.quotes_block_header_title}>What Our Customer Say About Us</p>
                <div className={styles.quotes_block_header_buttons_block}>
                    <button><LucideChevronLeft /></button>
                    <button><LucideChevronRight /></button>
                </div>
            </div>
            <div className={styles.quotes_block_quotes}>
                <div className={styles.quotes_block_quotes_item}>
                    <Image src={QuoteMarkIcon} alt="Quote mark icon" />
                    <p className={styles.quotes_block_quote_text}>&quot;Byway&apos;s tech courses are top-notch! As someone who&apos;s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.</p>
                    <div className={styles.quotes_block_author}>
                        <Image src={DesignerPhoto} className={styles.quotes_block_author_photo} alt="Designer photo"/>
                        <div className={styles.quotes_block_author_inside}>
                            <p className={styles.quotes_block_author_name}>Jane Doe</p>
                            <p className={styles.quotes_block_author_post}>Designer</p>
                        </div>
                    </div>
                </div>
                <div className={styles.quotes_block_quotes_item}>
                    <Image src={QuoteMarkIcon} alt="Quote mark icon" />
                    <p className={styles.quotes_block_quote_text}>&quot;Byway&apos;s tech courses are top-notch! As someone who&apos;s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.</p>
                    <div className={styles.quotes_block_author}>
                        <Image src={DesignerPhoto} className={styles.quotes_block_author_photo} alt="Designer photo"/>
                        <div className={styles.quotes_block_author_inside}>
                            <p className={styles.quotes_block_author_name}>Jane Doe</p>
                            <p className={styles.quotes_block_author_post}>Designer</p>
                        </div>
                    </div>
                </div>
                <div className={styles.quotes_block_quotes_item}>
                    <Image src={QuoteMarkIcon} alt="Quote mark icon" />
                    <p className={styles.quotes_block_quote_text}>&quot;Byway&apos;s tech courses are top-notch! As someone who&apos;s always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.</p>
                    <div className={styles.quotes_block_author}>
                        <Image src={DesignerPhoto} className={styles.quotes_block_author_photo} alt="Designer photo"/>
                        <div className={styles.quotes_block_author_inside}>
                            <p className={styles.quotes_block_author_name}>Jane Doe</p>
                            <p className={styles.quotes_block_author_post}>Designer</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div>Promotions</div>
      </div>
    </RootLayoutClient>
  );
}
