'use client'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import styles from './page.module.css'
import { HomeScreen } from '@/widgets/Main'

export default function RootLayoutClient({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const hideHeaderFooterRoutes = ['/signup', '/login']
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(pathname)
  const isHome = pathname === '/'

  return (
    <div className={styles.layoutWrapper}>
      <Provider store={store}>
        {!shouldHideHeaderFooter && <Header isAuthenticated={true} />}

        {isHome ? (
          <HomeScreen>{children}</HomeScreen>
        ) : (
          <main className={styles.layoutMain}>{children}</main>
        )}

        {!shouldHideHeaderFooter && <Footer />}
      </Provider>
    </div>
  )
}
