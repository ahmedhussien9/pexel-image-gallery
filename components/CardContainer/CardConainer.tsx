import { ReactNode } from "react"
import styles from "./CardConainer.module.scss";

type Props = {
    children?: ReactNode
}

const CardConainer = ({ children }: Props) => (
    <div className={styles.card}>
        {children}
    </div>
)

export default CardConainer