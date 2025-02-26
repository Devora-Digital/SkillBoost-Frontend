"use client"

import { ReactNode } from "react";

export default function RootLayoutClient({ children }: { children: ReactNode }) {
    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
    )
}
