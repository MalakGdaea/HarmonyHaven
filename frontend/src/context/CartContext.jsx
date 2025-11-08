import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [order, setOrder] = useState({
        items: [],
        total: 0,
    });

    const cartReset = () => {
        setOrder({
            items: [],
            total: 0,
        });
    }

    const addItem = (newItem) => {
        setOrder((prevOrder) => {
            const existingItem = prevOrder.items.find(item => item._id === newItem._id);
            let updatedItems;
            if (existingItem) {
                updatedItems = prevOrder.items.map(item =>
                    item._id === newItem._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedItems = [...prevOrder.items, { ...newItem, quantity: 1 }];
            }

            const updatedTotal = prevOrder.total + newItem.price;

            return {
                items: updatedItems,
                total: parseFloat(updatedTotal.toFixed(2)),
            };
        });
    };

    const removeItem = (id) => {
        setOrder((prevOrder) => {
            const itemToRemove = prevOrder.items.find(item => item._id === id);
            if (!itemToRemove) return prevOrder;

            let updatedItems = prevOrder.items.filter(item => item._id !== id);
            const updatedTotal = prevOrder.total - itemToRemove.price * itemToRemove.quantity;

            return {
                items: updatedItems,
                total: parseFloat(Math.max(updatedTotal, 0).toFixed(2)),
            };
        });
    };

    const updateQuantity = (id, change) => {
        setOrder((prevOrder) => {
            const item = prevOrder.items.find(item => item._id === id);
            if (!item) return prevOrder;

            const newQuantity = item.quantity + change;

            let updatedItems;
            if (newQuantity <= 0) {
                // If quantity is 0 or less, remove item completely
                updatedItems = prevOrder.items.filter(i => i._id !== id);
            } else {
                updatedItems = prevOrder.items.map(i =>
                    i._id === id ? { ...i, quantity: newQuantity } : i
                );
            }

            const updatedTotal = prevOrder.total + item.price * change;

            return {
                items: updatedItems,
                total: parseFloat(Math.max(updatedTotal, 0).toFixed(2)),
            };
        });
    };


    return (
        <CartContext.Provider value={{ order, addItem, removeItem, updateQuantity, cartReset }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
