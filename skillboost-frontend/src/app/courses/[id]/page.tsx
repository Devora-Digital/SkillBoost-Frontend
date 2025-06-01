import { Breadcrumbs } from '@/shared/ui/BreadCrumbs/BreadCrumbs'
import CoursePages from '@/widgets/CoursePage/ui/CoursePages'



const breadcrumbs = [
  {
    title: 'HomePage',
    href: '/'
  },
  {
    title: 'Categories',
    color: '#2563EB',
    arrow: true
  },
  {
    title: 'Categories',
    color: '#2563EB',
    arrow: true
  }
]

export default function CoursePage() {
  return (
    <>
          <Breadcrumbs items={breadcrumbs} />
          <CoursePages/>
        </>
  )
}
