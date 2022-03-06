import { IPhoto } from '../../interfaces/photo.interface';
import Image from "next/image";
import CardConainer from '../CardContainer/CardConainer';
import styles from "./LineItem.module.scss";

type Props = {
    item: IPhoto,
    onClickItem: (item) => void;
}

const LineItem = ({ item, onClickItem }: Props) => (
    <article className={styles.article} role="contentinfo" data-meta-title={item.photographer}>
        <button className={styles.link} onClick={() => onClickItem(item)} aria-label="Open the photo in a popup" title="open a popup to see a large image"  >
            <Image aria-label={`${item.alt}`} className={styles.image} src={item.src.medium} alt={item.alt} height={200} width={250} />
            <p aria-label={`The name of photo owner is ${item.photographer}`} className={styles.title} >{item.photographer}</p>
        </button>
    </article>
)

export default LineItem
