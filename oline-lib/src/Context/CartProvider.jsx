import React from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = React.useState([]);

    const addToCart = (item) => {
        console.log(item);
        setCartItems((prev) => {
            const existingItem = prev.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                return prev.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                );
            } else {
                return [...prev, { ...item, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (id, amount) => {
        setCartItems((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}
