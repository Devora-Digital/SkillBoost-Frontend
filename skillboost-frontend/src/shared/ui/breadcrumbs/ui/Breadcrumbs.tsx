import styles from './Breadcrumbs.module.scss'
import Link, {LinkProps} from 'next/link'
import { ChevronRight} from 'lucide-react';

export type BreadcrumbItemProps = Omit<LinkProps, 'href'> & {
    href?: LinkProps['href']
    title: string,
    color: string,
    arrow: boolean
}

export type BreadcrumbsProps = {
    items: BreadcrumbItemProps[]
}


export const BreadcrumbItem = ({  title, href, color, arrow, ...props  }: BreadcrumbItemProps) => {
    return (
        <>
            <div className={styles.breadcrumb}>
                {href ? <Link href={href} className={styles.link} {...props}>{title} </Link> : <span style={{color: color}}>{title}</span>}
                {arrow ? <div></div> : <ChevronRight/>}
            </div>
        </>
    )
}

export const Breadcrumbs = ({  items  }: BreadcrumbsProps) => {
    return (
        <nav className={styles.container}>
            {items.map((item, key) => <BreadcrumbItem key={key} {...item}/>)}
        </nav>
    )
}
