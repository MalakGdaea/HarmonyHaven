import styles from './Popup.module.css';

export function Popup({ title, message, buttonTitle, onClose, color = '#e67e22' }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.content} style={{ '--popup-color': color }}>
                <p className={styles.title}>{title}</p>
                <p className={styles.message}>{message}</p>
                <div className={styles.button} onClick={onClose}>{buttonTitle}</div>
            </div>
        </div>
    );
}