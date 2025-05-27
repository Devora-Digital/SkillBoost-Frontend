'use client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { Header } from '@/widgets/Header'
import { HomeScreen } from '@/widgets/Main'
import { Footer } from '@/widgets/Footer'
import { Profile } from '@/widgets/Profile'

export default function RootLayoutClient({
  children
}: {
  children: ReactNode
}) {
  return (
    <div>
      <Provider store={store}>
        <Header isAuthenticated={false} />
        {/* <main>{children}</main> */}
        {/* <Header isAuthenticated={true} /> */}
        {/* <NotFound /> */}
        <HomeScreen>
            {children}
        </HomeScreen>
        {/* <main>{children}</main> */}
        <Profile />
        <Footer />
      </Provider>
    </div>
  )
}
