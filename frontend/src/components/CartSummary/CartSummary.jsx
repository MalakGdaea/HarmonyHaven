import styles from './CartSummary.module.css';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CartSummary() {
    const { order } = useCart();
    const [isButtonDisabled, setIsButtonDisabled] = useState(order.items.length === 0);

    useEffect(() => {
        setIsButtonDisabled(order.items.length === 0);
    }, [order.items.length]);

    return (
        <div className={styles.cartContainer}>
            <h4 className={styles.title}>cart</h4>
            {order.items.length === 0 ? (
                <p className={styles.emptyMessage}>Your cart is empty.</p>) : (
                <div className={styles.cartSummary} >
                    <ul className={styles.cartList}>
                        {order.items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </ul>
                    <div className={styles.total}>
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                    </div>
                </div>)
            }
            <Link to='/checkout'>
                <div className={`${styles.checkoutButton} ${isButtonDisabled ? styles.disabled : {}}`}>Proceed to Checkout</div>
            </Link>
        </div>
    );
}

export default CartSummary;