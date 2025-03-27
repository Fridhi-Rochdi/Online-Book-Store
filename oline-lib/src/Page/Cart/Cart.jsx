import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext.js";

export default function Cart() {
    const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

    const getTotalPrice = () =>
        cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2);

    return (
        <div className="cart">
            <div className="cart-title">Your Shopping Cart</div>

            {cartItems.length === 0 ? (
                <div className="empty-cart">Your cart is empty.</div>
            ) : (
                <div className="cart-wrapper">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/books/${item.image}`}
                                    alt={item.title}
                                    className="cart-item-img"
                                />
                                <div className="cart-item-info">
                                    <div>
                                        <div className="cart-item-info-title">
                                            <b>Title: </b> {item.title}
                                        </div>
                                        <div className="cart-item-info-author">
                                            <b>Author: </b> {item.author}
                                        </div>
                                    </div>
                                    <div className="cart-item-price">
                                        <div className="cart-item-info-quantity">
                                            <button onClick={() => updateQuantity(item.id, 1)}>
                                                <i className="bi bi-plus-lg"></i>
                                            </button>
                                            {item.quantity}
                                            <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
                                                <i className="bi bi-dash-lg"></i>
                                            </button>
                                        </div>
                                        <b>{(item.quantity * item.price).toFixed(2)}£</b>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                            <i className="bi bi-trash"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="order-summary">
                        <div className="order-summary-title">Order Summary</div>
                        <div className="order-summary-item">
                            <span>Subtotal</span>
                            <span>£{getTotalPrice()}</span>
                        </div>
                        <div className="order-summary-item">
                            <span>Discount</span>
                            <span>£0.00</span>
                        </div>
                        <div className="order-summary-item">
                            <span>Shipping Cost</span>
                            <span>£0.00</span>
                        </div>
                        <div className="order-summary-item total">
                            <span>Total</span>
                            <span>£{getTotalPrice()}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
