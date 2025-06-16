'use client'
import { useState } from 'react'
import { Share2 } from 'lucide-react'
import styles from './Profile.module.scss'
import Image from 'next/image'
import ProfileFirstTab from './@ProfileFirstTab/ProfileFirstTab'
import ProfileSecondTab from './@ProfileSecondTab/ProfileSecondTab'

const tabs = [
  { name: 'Profile', key: 'profile' },
  { name: 'My Courses', key: 'courses' },
  { name: 'Teachers', key: 'teachers' },
  { name: 'Message', key: 'messages' },
  { name: 'My Reviews', key: 'reviews' }
]

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className={styles.container}>
      <div className={styles.containerAside}>
        <div className={styles.asidePerson}>
          <Image
            src='/assets/img-profile.png'
            alt='SkillBoost'
            width={160}
            height={160}
            className={styles.asideImage}
          />
          <p className={styles.asideName}>John Doe</p>
          <button className={styles.asideButton}>
            <span>Share</span>
            <Share2 color='#0f172a' />
          </button>
        </div>
        <div className={styles.asideTabs}>
          <div className={styles.asideLine}></div>
          <ul className={styles.asideMenu}>
            {tabs.map(({ name, key }) => (
              <li key={key}>
                <button
                  className={activeTab === key ? styles.active : ''}
                  onClick={() => setActiveTab(key)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.containerContent}>
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'courses' && <CoursesTab />}
        {activeTab === 'teachers' && <TeachersTab />}
        {activeTab === 'messages' && <MessagesTab />}
        {activeTab === 'reviews' && <ReviewsTab />}
      </div>
    </div>
  )
}

const ProfileTab = () => (
  <div>
    <ProfileFirstTab />
  </div>
)
const CoursesTab = () => (
  <div >
    <ProfileSecondTab/>
  </div>
)
const TeachersTab = () => <div>Teachers Content</div>
const MessagesTab = () => <div>Messages Content</div>
const ReviewsTab = () => <div>Reviews Content</div>

export default Profile
