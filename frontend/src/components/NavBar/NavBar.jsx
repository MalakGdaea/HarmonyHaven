import styles from './NavBar.module.css';
import { icons } from '../../assets/';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import CartSummary from '../CartSummary/CartSummary';


function NavBar() {
    const { order } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <nav className={styles.navContainer}>
            <img className={styles.audioIcon} src={icons.audio} />
            <Link to='/'><img className={styles.logo} src={icons.logo} /></Link>
            <div className={styles.cartContainer}>
                <img onClick={() => setIsCartOpen(!isCartOpen)} className={styles.cart} src={icons.cartIcon} />
                <div className={styles.quantity}>{order.items.length}</div>
                {isCartOpen && <div className={styles.cartSummary}><CartSummary setIsCartOpen={setIsCartOpen} /></div>}
            </div>
        </nav>
    );
}

export default NavBar;