'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { Header } from '@/widgets/Header'

export default function RootLayoutClient({
  children
}: {
  children: ReactNode
}) {
  return (
    <div>
      <Provider store={store}>
        <Header isAuthenticated={false} />
        <Header isAuthenticated={true} />
        <main>{children}</main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </Provider>
    </div>
  )
}
