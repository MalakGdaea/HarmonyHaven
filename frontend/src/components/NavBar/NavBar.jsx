import styles from './NavBar.module.css';
import { icons } from '../../assets/';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState, useRef, useEffect } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import { useCategories } from '../../context/CategoriesContext';
import SubNavBar from '../SubNavBar/SubNavBar.jsx';
import { useAudio } from '../../context/AudioContext.jsx';


function NavBar() {
    const { order } = useCart();
    const { categories } = useCategories();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null)
    const { isPlaying, toggleAudio } = useAudio();
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        function handleClickOutside(event) {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        }

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen]);

    const handleAudioClick = () => {
        toggleAudio();
        setShowPopup(false); // hide popup forever after first click
    };

    return (
        <div className={styles.navBarContainer}>
            <nav className={styles.navContainer}>
                <div className={styles.audioWrapper}>
                    <img className={styles.audioIcon} src={isPlaying ? icons.audio : icons.mute} onClick={handleAudioClick} />
                    {showPopup && (
                        <div className={styles.audioPopup}>
                            Click to start listening to music while browsing 🎵
                        </div>
                    )}
                </div>
                <Link to='/'><img className={styles.logo} src={icons.logo} /></Link>
                <div className={styles.cartContainer} ref={cartRef}>
                    <img onClick={() => setIsCartOpen(!isCartOpen)} className={styles.cart} src={icons.cartIcon} />
                    {order.items.length > 0 ? <div className={styles.quantity}>{order.items.length}</div> : null}
                    {isCartOpen && <div className={styles.cartSummary}><CartSummary setIsCartOpen={setIsCartOpen} /></div>}
                </div>
            </nav>
            <SubNavBar categories={categories} />
        </div>
    );
}

export default NavBar;