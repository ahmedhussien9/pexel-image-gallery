

import styles from "./Loader.module.scss";

type Props = {
    isLoading: boolean
}

const Loader = ({ isLoading }) => {
    const loading = () => {
        if (isLoading) {
            return (
                <div className={styles.loaderContainer}>
                    <div className={styles.ldsRing} ><div></div><div></div><div></div><div></div></div >
                    <p className={styles.title}>Loading...</p>
                </div>
            )
        }
    }
    return (
        loading()
    )

}
export default Loader;

