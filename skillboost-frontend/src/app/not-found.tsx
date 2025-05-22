import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { NotFound } from '@/widgets/NotFound'

export default function NotFoundPage() {
  return (
    <>
      <Header isAuthenticated={false} />
      <NotFound />
      <Footer />
    </>
  )
}
