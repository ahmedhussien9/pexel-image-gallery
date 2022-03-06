import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from "./Modal.module.scss";

const PopupDialog = ({ open, closeModal, children }) => {
    return (
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className={`${styles.popup} modal `}>
                {children}
            </div>
        </Popup>
    )
}
export default PopupDialog;

