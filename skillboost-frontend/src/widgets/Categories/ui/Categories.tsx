import styles from './Categories.module.scss'
import { ListFilter } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Categories = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.h1}>Design Courses</h1>
            <h3 className={styles.h3}>All Development Courses</h3>
            <div className={styles.line}>
                <div className={styles.filter}>
                    <ListFilter />
                    Filter
                </div>
                <div className={styles.line}>
                    <p className={styles.p}>Sort By</p>
                    <div className={styles.option__div}>
                        <select className={styles.option} name="Relevance">
                            <option value="">
                                Relevance
                            </option>
                            <option value="">From cheap to expensive</option>
                            <option value="">From expensive to cheap</option>
                        </select>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Categories;