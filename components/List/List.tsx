import * as React from 'react';
import { IPhoto } from '../../interfaces/photo.interface';
import LineItem from '../LineItem/LineItem';
import styles from "./List.module.scss";

type Props = {
    items: IPhoto[],
    onClickItem: (item) => void;
}

const List = ({ items, onClickItem }: Props) => {
    const handleClickEvent = (item: IPhoto) => {
        onClickItem(item);
    }
    return (
        <section className={styles.list} >
            {
                items && items.map((item, i) => (
                    <LineItem item={item} key={item.id.toString()} onClickItem={handleClickEvent} />
                ))
            }
        </section >
    )
}

export default List;
