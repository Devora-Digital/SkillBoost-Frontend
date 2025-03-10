'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'

export default function RootLayoutClient({
  children
}: {
  children: ReactNode
}) {
  return (
    <div>
      <Provider store={store}>
        {/* <Header isAuthenticated={false} /> */}
        <Header isAuthenticated={true} />
        <main>{children}</main>
        {/* <Footer /> */}
      </Provider>
    </div>
  )
}
