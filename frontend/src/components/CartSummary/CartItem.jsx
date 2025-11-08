import styles from './CartItem.module.css';
import { useCart } from '../../context/CartContext';

function CartItem({ item }) {
    const { updateQuantity } = useCart();

    return (
        <div className={styles.cartItem}>
            <p className={styles.imageContainer}>
                <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
            </p>
            <div className={styles.itemInfo}>
                <p className={styles.itemName}>{item.name}</p>
                <div className={styles.itemDetails}>
                    <p className={styles.itemPrice}>${item.price}</p>
                    <div className={styles.quantity}>
                        <button onClick={() => updateQuantity(item._id, -1)}>-</button>
                        <p className={styles.itemQuantity}>{String(item.quantity).padStart(2, '0')}</p>
                        <button onClick={() => updateQuantity(item._id, 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;