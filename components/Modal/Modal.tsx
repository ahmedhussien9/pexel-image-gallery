import { type } from 'os';
import { ReactNode } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from "./Modal.module.scss";

type Props = {
    open: boolean;
    children?: ReactNode;
    closeModal: () => void;
}

const Modal = ({ open, closeModal, children }: Props) => {
    return (
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className={`${styles.customModal} modal `}>
                {children}
            </div>
        </Popup>
    )
}
export default Modal;

