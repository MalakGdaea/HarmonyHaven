import styles from "./ProductCard.module.css";
import { icons } from "../../assets";

function ProductCard({ product }) {
    return (
        <div className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>${product.price}</p>
                <img src={icons.add} alt="Add to cart" className={styles.addIcon} />
            </div>
        </div>
    );
}

export default ProductCard;