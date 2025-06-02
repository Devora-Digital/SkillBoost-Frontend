import { Breadcrumbs } from '@/shared/ui/BreadCrumbs/BreadCrumbs'
import CoursePages from '@/widgets/CoursePage/ui/CoursePage'



const breadcrumbs = [
  {
    title: 'HomePage',
    href: '/'
  },
  {
    title: 'Lable',
    href: '/',
  },
  {
    title: 'Lable',
    href: '/',
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
