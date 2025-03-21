
import RootLayoutClient from "../app/layoutClient";
import Image from "next/image";
import { Rating } from "@mui/material";
import { LucideTelescope } from "lucide-react";
import { LucideCode } from "lucide-react";
import { LucideBriefcase } from "lucide-react";
import { LucideAtom } from "lucide-react";
import { LucideChevronLeft } from "lucide-react";
import { LucideChevronRight } from "lucide-react";
import { LucideArrowRight } from "lucide-react";
import BannerImageFirst from "../../public/Homepage/Banner_Image_01.png"
import BannerImageSecond from "../../public/Homepage/Banner_Image_02.png"
import BannerImageThird from "../../public/Homepage/Banner_Image_03.png"
import TopCoursesImage from "../../public/Homepage/TopCoursesImage_01.jpeg"
import TopInstructorsImage from "../../public/Homepage/InstructorImage_01.png"
import OfferImageFirst from "../../public/Homepage/Offer_image_01.png"
import OfferImageSecond from "../../public/Homepage/Offer_Image_02.png"
import DesignerPhoto from "../../public/Homepage/Designer_image_01.jpeg"
import QuoteMarkIcon from "../../public/Homepage/ri_double-quotes-l.svg"
import styles from "./page.module.scss";

export default function Home() {
    const lineStyleFirst = {
        width: '100%',
        border: '1px solid #E2E8F0'
    }
  return (
    <RootLayoutClient>
      <div className={styles.page}>
          <div className={styles.banner_block}>
            <div className={styles.banner_block_inside_block_first}>
                <div className={styles.banner_block_text_block}>
                    <p className={styles.banner_block_title}>Unlock Your Potential with Byway</p>
                    <p className={styles.banner_block_description}>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we&apos;re here to guide you on your journey to success.</p>
                </div>
                <button className={styles.banner_block_button}>Start your instructor journey</button>
            </div>
            <div className={styles.banner_block_inside_block_second}>
                <div className={styles.wrapper_circle_first}>
                    <div className={styles.banner_circle_first}>
                        <Image className={styles.banner_image_first} src={BannerImageFirst} alt="Banner image 01" width={183.62} height={260.32} />
                    </div>
                </div>
                <div className={styles.wrapper_circle_second}>
                    <div className={styles.banner_circle_second}>
                    <Image className={styles.banner_image_second} src={BannerImageSecond} alt="Banner image 02" width={174} height={165} />
                        {/* <Image className={styles.banner_image_second} src={BannerImageSecond} alt="Banner image 02" /> */}
                        {/* <Image className={styles.banner_image_second} src={BannerImageSecond} alt="Banner image 02" width={173.88} height={165.19} /> */}
                    </div>
                </div>
                <div className={styles.wrapper_circle_third}>
                    <div className={styles.banner_circle_third}>
                        <Image className={styles.banner_image_third} src={BannerImageThird} alt="Banner image 03" width={331.64} height={221.09} />
                    </div>
                </div>
            </div>
          </div>
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
                        <Image className={styles.course_item_picture} src={TopCoursesImage} width={266} height={139} alt="Top Course 01"/>
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
                        <Image className={styles.course_item_picture} src={TopCoursesImage} width={266} height={139} alt="Top Course 01"/>
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
                        <Image className={styles.course_item_picture} src={TopCoursesImage} width={266} height={139} alt="Top Course 01"/>
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
                        <Image className={styles.course_item_picture} src={TopCoursesImage} width={266} height={139} alt="Top Course 01"/>
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
                        <Image className={styles.mentor_item_picture} src={TopInstructorsImage} width={177} height={132} alt="Top Mentor 01" />
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
                        <Image className={styles.mentor_item_picture} src={TopInstructorsImage} width={177} height={132} alt="Top Mentor 01" />
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
                        <Image className={styles.mentor_item_picture} src={TopInstructorsImage} width={177} height={132} alt="Top Mentor 01" />
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
                        <Image className={styles.mentor_item_picture} src={TopInstructorsImage} width={177} height={132} alt="Top Mentor 01" />
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
                        <Image className={styles.mentor_item_picture} src={TopInstructorsImage} width={177} height={132} alt="Top Mentor 01" />
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
                    <button className={styles.quotes_navigation_block}><LucideChevronLeft /></button>
                    <button className={styles.quotes_navigation_block}><LucideChevronRight /></button>
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
          <div className={styles.offers_block}>
                <div className={styles.offers_block_wrapper}>
                    <div className={styles.offers_block_wrapper_first}>
                        <Image className={styles.offers_block_first_image} src={OfferImageFirst} alt="Offer image №1" />
                        <div className={styles.offers_block_first_control}>
                            <div className={styles.offers_block_first_text_block}>
                                <p className={styles.offers_block_title}>Become an Instructor</p>
                                <p className={styles.offers_block_description}>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
                            </div>
                            <button className={styles.offers_block_first_button}>Start Your Instructor Journey<LucideArrowRight/></button>
                        </div>
                    </div>
                    <div className={styles.offers_block_wrapper_second}>
                        <div className={styles.offers_block_second_control}>
                            <div className={styles.offers_block_second_text_block}>
                                <p className={styles.offers_block_title}>Transform your life through education</p>
                                <p className={styles.offers_block_description}>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                            </div>
                            <button className={styles.offers_block_second_button}>Checkout Courses<LucideArrowRight/></button>
                        </div>
                        <Image className={styles.offers_block_first_image} src={OfferImageSecond} alt="Offer image №2" />
                    </div>
                </div>
          </div>
      </div>
    </RootLayoutClient>
  );
}
