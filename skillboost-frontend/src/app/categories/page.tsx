// import { Breadcrumbs } from '@/shared/ui/BreadCrumbs/BreadCrumbs'
import { Categories } from "@/widgets/Categories"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
// const breadcrumbs = [
//   {
//     title: 'HomePage',
//     href: '/'
//   },
//   {
//     title: 'Categories',
//     color: '#2563EB',
//     arrow: true
//   }
// ]

export default function CategoriesPage() {
  return (
    <>
        <Header isAuthenticated={true}/>
        {/* <Breadcrumbs items={breadcrumbs}/> */}
        {/* <a href="/details">Go to details page</a> */}
        <Categories />
        {/* <Footer /> */}
    </>
  )
}
