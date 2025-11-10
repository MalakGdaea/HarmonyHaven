import styles from "./ProductCard.module.css";
import { icons } from "../../assets";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
    const { addItem } = useCart();
    return (
        <div className={styles.productCard}>
            <div className={styles.productImageContainer}>
                <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.productInfo}>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>${product.price}</p>
                <img src={icons.add} alt="Add to cart" className={styles.addIcon} onClick={() => addItem(product)} />
            </div>
        </div>
    );
}

export default ProductCard;