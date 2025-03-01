"use client"

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
    return (
        <div>
            <Provider store={store}>
                <header>
                    <h1>Header</h1>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <h1>Footer</h1>
                </footer>
            </Provider>
        </div>
    )
}
