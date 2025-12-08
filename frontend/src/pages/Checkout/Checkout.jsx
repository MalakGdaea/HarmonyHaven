import ProgressBar from '../../components/ProgressBar/ProgressBar';
import styles from './Checkout.module.css';
import { steps } from '../../constans/steps';
import Form from '../../components/Form/Form';
import CheckoutReview from '../../components/CheckoutReview/CheckoutReview';
import { useState } from 'react';
import { setOrder } from '../../api/orderApi';
import { useCart } from '../../context/CartContext';
import { buildOrder } from '../../utils/orderUtils';
import { Popup } from '../../components/Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { customerFields } from '../../forms/customerFields';
import { addressFields } from '../../forms/addressFields';
import { paymentFields } from '../../forms/paymentFields';

function Checkout() {
    const navigate = useNavigate();
    const { order, cartReset } = useCart();
    const [step, setStep] = useState(0);
    const fields = [customerFields, addressFields, paymentFields];
    const [customerData, setCustomerData] = useState({});
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
    const [isLaoding, setIsLoading] = useState(false);

    const handleFormSubmit = (values) => {
        setCustomerData((data) => ({ ...data, ...values }));
        setStep((s) => Math.min(s + 1, steps.length - 1));
    };

    const handleConfirmOrder = () => {
        const orderPayload = buildOrder(customerData, order);
        console.log(orderPayload);

        setIsLoading(true);
        setOrder(orderPayload).then((response) => {
            setIsLoading(false)
            setIsOrderConfirmed(true);
        }).catch((error) => {
            setIsLoading(false)
            console.error('Order error:', error);
            alert('There was an error placing your order. Please try again.');
        });
    };

    const handleClose = () => {
        cartReset();
        navigate('/');
    };

    return (
        <div className={styles.checkoutPage}>
            {isLaoding && <div className={styles.loadingOverlay}>
                <div className={styles.loader}></div>
            </div>}
            {isOrderConfirmed && <Popup title={"You Place the Order Successfully"}
                message={"Your order was placed successfully! A confirmation email is on its way. Thanks for shopping with us—enjoy making music with your new instruments!"}
                buttonTitle={"KEEP BROWSING"} onClose={handleClose} />}
            <ProgressBar steps={steps} currentStep={step} />
            {step >= steps.length - 1 ? <CheckoutReview customerData={customerData} onConfirm={handleConfirmOrder} /> :
                <Form
                    fields={fields[step]}
                    onSubmit={handleFormSubmit}
                    submitLabel={"Continue"}
                />
            }
        </div>
    );
}

export default Checkout;
