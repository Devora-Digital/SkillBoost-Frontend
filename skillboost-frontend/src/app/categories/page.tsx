import { Breadcrumbs } from "@/shared/ui/breadcrumbs/ui/Breadcrumbs"

const breadcrumbs = [
  {
    title: 'HomePage',
    href: '/'
  },
  {
    title: 'Categories',
    color: '#2563EB',
    arrow: true
  }
]

export default function CategoriesPage() {
  return (
    <>
        <Breadcrumbs items={breadcrumbs}/>
        <a href="/details">Go to details page</a>
    </>
  )
}
