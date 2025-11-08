import styles from './CheckoutReview.module.css';
import { useCart } from '../../context/CartContext';
import Button from '../Button/Button';
import CartItem from '../CartSummary/CartItem';
import { useMemo } from 'react';

export default function CheckoutReview({ customerData, onConfirm }) {
    const { order } = useCart();
    const deliveryFee = customerData.deliveryType === 'express' ? 15 : 0;
    const finalTotal = useMemo(() => order.total + deliveryFee, [order.total, deliveryFee]);

    const {
        fullName, email, phone, deliveryType,
        street, city, zip, country,
        cardNumber, exp
    } = customerData;

    const maskedCard = `**** **** **** ${cardNumber.slice(-4)}`;

    return (
        <div>
            <div className={styles.header}>
                <h2>ORDER SAMMARY</h2>
                <Button onClick={onConfirm} label="PLACE YOUR ORDER" />
            </div>
            <div className={styles.summaryContainer}>
                <div>
                    <section className={styles.section}>
                        <h3 className={styles.title}>CUSTOMER INFO</h3>
                        <p><strong>Name:</strong> {fullName}</p>
                        <p><strong>Email:</strong> {email}</p>
                        <p><strong>Phone:</strong> {phone}</p>
                    </section>

                    <section className={styles.section}>
                        <h3 className={styles.title}>SHIPPING ADDRESS</h3>
                        <p>{street}, {city}, {zip}, {country}</p>
                        <p><strong>Delivery Type:</strong> {deliveryType}</p>
                    </section>

                    <section className={styles.section}>
                        <h3 className={styles.title}>PAYMENT METHOD</h3>
                        <p><strong>Card:</strong> {maskedCard}</p>
                        <p><strong>Expiry:</strong> {`${exp[0]}${exp[1]}/${exp[2]}${exp[3]}`}</p>
                    </section>
                </div>
                <div className={styles.orderItems}>
                    <section className={styles.section}>
                        {order.items.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </section>

                    <section className={`${styles.section} ${styles.totalSection}`}>
                        <div className={styles.row}>
                            <p>Delivelry</p>
                            <p>{deliveryType === 'express' ? '$15.00' : 'Free'}</p>
                        </div>
                        <hr />
                        <div className={styles.row}>
                            <p>Total</p>
                            <p className={styles.total}>${finalTotal.toFixed(2)}</p>
                        </div>
                        <div>
                            <Button onClick={onConfirm} label="PLACE YOUR ORDER" />
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
}