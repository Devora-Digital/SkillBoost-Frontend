"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Rating } from "@mui/material"
import TopInstructorsImage from "@assets/InstructorImage_01.png"
import { mentors, MentorsItem } from "@/data/mentorsData"
import styles from "./MentorsItemCards.module.scss"

// interface MentorsItemProps {
//     title: string
//     post: string
//     rating: string
//     students_count: string
// }

// export default function MentorsItemCards({ title, post, rating, students_count }: MentorsItemProps) {
  export default function MentorsItemCards() {
    const [mentorsData, setMentorsData] = useState<MentorsItem[]>([])
    useEffect(() => {
      setMentorsData(mentors)
    }, [])
    // const [mentorsData, setMentorsData] = useState<MentorsItem[]>([])
    const lineStyleFirst = {
        width: '100%',
        border: '1px solid #E2E8F0'
    }
    return (
      <div className={styles.mentors_block}>
          <div className={styles.mentors_control_block}>
              <p className={styles.mentors_title}>Top Instructors</p>
              <button className={styles.all_mentors_button}>See All</button>
          </div>
          <div className={styles.mentors_items_block}>
            {mentorsData.map(mentor => {
              return (
                <div className={styles.mentors_item} key={mentor.id}>
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
                          <p className={styles.mentors_item_title}>{mentor.title}</p>
                            {/* <p className={styles.mentors_item_title}>Ronald Richards</p> */}
                            <p className={styles.mentors_item_post}>{mentor.post}</p>
                            {/* <p className={styles.mentors_item_post}>UI/UX Designer</p> */}
                          </div>
                          <hr style={lineStyleFirst} />
                          <div className={styles.mentors_item_info_second_block}>
                            <div className={styles.mentors_item_rating_block}>
                              <Rating name='mentor-rating' max={1} readOnly />
                              <p className={styles.mentors_item_rating}>{mentor.rating}</p>
                              {/* <p className={styles.mentors_item_rating}>4.9</p> */}
                            </div>
                            <p className={styles.mentors_item_students_count}>
                              {mentor.students_count} Students
                            </p>
                            {/* <p className={styles.mentors_item_students_count}>
                              2400 Students
                            </p> */}
                          </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    )
}
