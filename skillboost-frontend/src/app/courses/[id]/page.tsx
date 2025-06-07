import { Breadcrumbs } from '@/shared/ui/BreadCrumbs/BreadCrumbs'
import { CoursePage } from '@/widgets/CoursePage'


const breadcrumbs = [
  {
    title: 'HomePage',
    href: '/'
  },
  {
    title: 'Categories',
    href: '/categories',
  },
  {
    title: 'Course',
    href: '',
    arrow: true
  }
]

export default function PageCourse () {
  return (
    <>
          <Breadcrumbs items={breadcrumbs} />
          <CoursePage/>
        </>
  )
}
