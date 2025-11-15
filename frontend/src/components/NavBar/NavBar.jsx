import styles from './NavBar.module.css';
import { icons } from '../../assets/';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState, useRef, useEffect } from 'react';
import CartSummary from '../CartSummary/CartSummary';
import { useCategories } from '../../context/CategoriesContext';
import SubNavBar from '../SubNavBar/SubNavBar.jsx';


function NavBar() {
    const { order } = useCart();
    const { categories } = useCategories();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null)

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

    return (
        <div className={styles.navBarContainer}>
            <nav className={styles.navContainer}>
                <img className={styles.audioIcon} src={icons.audio} />
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