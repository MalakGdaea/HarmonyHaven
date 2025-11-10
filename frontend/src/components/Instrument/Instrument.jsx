import styles from './Instrument.module.css';
import Button from '../Button/Button.jsx';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

export default function Instrument({ item }) {
    const { addItem } = useCart();
    const [imageUrl, setImageUrl] = useState(item.imageUrl);

    const addToCart = () => {
        addItem(item);
    }

    return (
        <div className={styles.instrumentCard}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl ?? item.imageUrl} alt={item.name} />
            </div>
            <div className={styles.colorCircleRow}>
                {item.variants.map((variant) => (
                    <div
                        key={variant.id}
                        className={styles.colorCircle}
                        style={{ backgroundColor: variant.colorCode }}
                        title={`${variant.colorName}`}
                        onClick={() => setImageUrl(variant.imageUrl)}
                    ></div>
                ))}
            </div>
            <span className={styles.title}>{item.name}</span>
            <span className={styles.description}>{item.description}</span>
            <span className={styles.price}>${item.price}</span>
            <div className={styles.action}>
                <Button label={"Add to Cart"} onClick={addToCart} />
            </div>
        </div>
    )
}