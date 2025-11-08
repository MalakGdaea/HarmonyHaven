import styles from './Footer.module.css';

export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div>
                <div>
                    <h3>About Us</h3>
                </div>
                <div>
                    <h3>Get In Touch</h3>
                </div>
                <div>
                    <h3>Explore</h3>
                </div>
            </div>
            <div className={styles.rights}>
                <p>© 2025 Harmony Haven. All rights reserved.</p>
                <div className={styles.links}>
                    <p>Terms of service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    )
}