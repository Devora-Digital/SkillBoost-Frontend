'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { Footer } from '@/widgets/Footer'

export default function RootLayoutClient({
  children
}: {
  children: ReactNode
}) {
  return (
    <div>
      <Provider store={store}>
        <header>
          <h1>Header</h1>
        </header>
        <main>{children}</main>
        <Footer />
      </Provider>
    </div>
  )
}
