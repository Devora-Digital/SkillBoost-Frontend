
import Image from "next/image"
import { Rating } from "@mui/material"
import TopInstructorsImage from "@assets/InstructorImage_01.png"
import styles from "./ItemCard.module.scss"

interface InstructorItemProps {
    title: string
    post: string
    rating: string
    students_count: string
}

export default function InstructorItemCard({ title, post, rating, students_count }: InstructorItemProps) {
    const lineStyleFirst = {
        width: '100%',
        border: '1px solid #E2E8F0'
    }
    return (
        <div className={styles.mentors_item}>
            <div className={styles.mentors_item_inside}>
                <Image
                  className={styles.mentor_item_picture}
                  src={TopInstructorsImage}
                  width={177}
                  height={132}
                  alt='Top Mentor 01'
                />
                <div className={styles.mentors_item_info}>
                  <div className={styles.mentors_item_info_first_block}>
                    <p className={styles.mentors_item_title}>Ronald Richards</p>
                    <p className={styles.mentors_item_post}>UI/UX Designer</p>
                  </div>
                  <hr style={lineStyleFirst} />
                  <div className={styles.mentors_item_info_second_block}>
                    <div className={styles.mentors_item_rating_block}>
                      <Rating name='mentor-rating' max={1} readOnly />
                      <p className={styles.mentors_item_rating}>4.9</p>
                    </div>
                    <p className={styles.mentors_item_students_count}>
                      {students_count} Students
                    </p>
                    {/* <p className={styles.mentors_item_students_count}>
                      2400 Students
                    </p> */}
                  </div>
                </div>
            </div>
        </div>
    )
}
