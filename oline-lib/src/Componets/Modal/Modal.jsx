import { Link } from "react-router-dom";
import Rating from "../BookSlider/Rating";
import "./Modal.css";
import React, { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";

export default function Modal({ bookInfo, setShowModal }) {
    const { image, title, rating, reviews, inStock, author, price, id } = bookInfo;
    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(1);

    return (
        <div className="modal-container">
            <div className="modal-content">
                <i onClick={() => setShowModal(false)} className="bi bi-x close-btn"></i>

                <div className="modal-content-img">
                    <img src={`${process.env.PUBLIC_URL}/books/${image}`} alt={title} />
                </div>

                <div className="modal-content-des">
                    <div className="modal-content-title">{title}</div>
                    <Rating rating={rating} reviews={reviews} />

                    <div className="modal-content-stock">
                        <b>Stock:</b> 
                        <span style={{ color: inStock ? "green" : "red" }}>
                            {inStock ? " En stock" : " Hors stock"}
                        </span>
                    </div>

                    <div className="modal-content-author">
                        <b>Author: </b>
                        <span style={{ color: "blue" }}>{author}</span>
                    </div>

                    <div className="modal-content-price">
                        <b>Price: </b>
                        <span style={{ color: "red" }}>${price.toFixed(2)}</span>
                    </div>

                    <div className="modal-content-input">
                        <input 
                            type="number" 
                            min="1" 
                            max="100" 
                            className="modal-content-input-quantite" 
                            value={qty} 
                            onChange={e => setQty(Number(e.target.value))}
                        />

                        <button 
                            className="modal-content-button-cart"
                            onClick={() => addToCart({ ...bookInfo, quantity: qty })}
                        >
                            <i className="bi bi-cart"></i>
                            Add To Cart
                        </button>
                    </div>

                    <Link to={`/book/${id}`} className="modal-content-more-details">
                        <button>See More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
