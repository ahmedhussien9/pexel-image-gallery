import styles from "./PageHeader.module.scss";
type Props = {
    title: string;
    description: string;
}

const PageHeader = ({ title, description }: Props) => (
    <header className={styles.PageHeader} >
        <h1 className={styles.title} aria-label={`page title ${title}`} >{title}</h1>
        <p className={styles.description} aria-label={`page description ${title}`} >{description}</p>
    </header>

)

export default PageHeader
