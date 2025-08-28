
import { ReactNode } from "react";
import styles from "./HomeScreen.module.scss"

export default function HomeScreen({children} : {children: ReactNode}) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}
