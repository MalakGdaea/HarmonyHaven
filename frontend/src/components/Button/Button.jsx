import styles from "./Button.module.css";

export default function Button({ label, onClick, type = "button" }) {
    return (
        <div className={styles.container}>
            <button type={type} onClick={onClick}>{label}</button>
        </div>
    )
}

