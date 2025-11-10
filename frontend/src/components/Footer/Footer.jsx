import styles from './Footer.module.css';
import { icons } from '../../assets';
import { Link } from 'react-router-dom';
import { useCategories } from '../../context/CategoriesContext';

export default function Footer() {
    const { categories } = useCategories();

    return (
        <div className={styles.footerContainer}>
            <div className={styles.sections}>
                <div className={styles.about}>
                    <h3>About Us</h3>
                    <p>Harmony Haven, where every note finds its home. Our instruments are crafted with care and passion to inspire creativity, connection, and the pure joy of making music.</p>
                    <div className={styles.socials}>
                        <div className={styles.icon}><img src={icons.x} alt="X" /></div>
                        <div className={styles.icon}> <img src={icons.face} alt="Facebook" /></div>
                        <div className={styles.icon}><img src={icons.insta} alt="Instagram" /></div>
                    </div>
                </div>
                <div>
                    <h3>Get In Touch</h3>
                    <div className={styles.contact}>
                        <div className={styles.contactItem}>
                            <div className={styles.icon}><img src={icons.location} alt="Location" /></div>
                            <div>
                                <p>123 Melody Lane, Holy Park</p>
                                <p>Calefornia, USA</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.icon}><img src={icons.phone} alt="Phone" /></div>
                            <div>
                                <p>+01 234 567 890</p>
                                <p>+09 076 543 210</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.icon}><img src={icons.email} alt="Email" /></div>
                            <div>
                                <p>support38@mail.com</p>
                                <p>mailinfo@mail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Explore</h3>
                    <div className={styles.explore}>
                        {categories.map(cat => (
                            <p key={cat._id}>
                                <Link key={cat._id} to={`/${cat._id}`} className={styles.exploreLink}>
                                    {cat.name}
                                </Link>
                            </p>
                        ))}
                    </div>
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
        </div >
    )
}