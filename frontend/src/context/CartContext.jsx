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

    const isSameVariant = (itemA, itemB) => {
        return itemA._id === itemB._id &&
            itemA.selectedVariant?._id === itemB.selectedVariant?._id;
    }

    const addItem = (newItem) => {
        setOrder((prevOrder) => {
            const existingItem = prevOrder.items.find(item => item._id === newItem._id
                && item.selectedVariant?._id === newItem.selectedVariant?._id
            );
            let updatedItems;
            if (existingItem) {
                updatedItems = prevOrder.items.map(item =>
                    item._id === newItem._id && isSameVariant(item, newItem)
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

    const removeItem = (itemToRemove) => {
        setOrder((prevOrder) => {
            const item = prevOrder.items.find(i =>
                i._id === itemToRemove._id && isSameVariant(i, itemToRemove)
            );
            if (!item) return prevOrder;

            const updatedItems = prevOrder.items.filter(i =>
                !(i._id === itemToRemove._id && isSameVariant(i, itemToRemove))
            );

            const updatedTotal = prevOrder.total - item.price * item.quantity;

            return {
                items: updatedItems,
                total: parseFloat(Math.max(updatedTotal, 0).toFixed(2)),
            };
        });
    };

    const updateQuantity = (itemToUpdate, change) => {
        setOrder((prevOrder) => {
            const item = prevOrder.items.find(i =>
                i._id === itemToUpdate._id && isSameVariant(i, itemToUpdate)
            );
            if (!item) return prevOrder;

            const newQuantity = item.quantity + change;

            let updatedItems;
            if (newQuantity <= 0) {
                // Remove item if quantity drops to 0 or below
                updatedItems = prevOrder.items.filter(i =>
                    !(i._id === itemToUpdate._id && isSameVariant(i, itemToUpdate))
                );
            } else {
                updatedItems = prevOrder.items.map(i =>
                    i._id === itemToUpdate._id && isSameVariant(i, itemToUpdate)
                        ? { ...i, quantity: newQuantity }
                        : i
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
