import React, { useState, useContext } from 'react';
import './BooKSlider.css';
import Rating from './Rating';
import Modal from '../Modal/Modal';
import CartContext from '../../Context/CartContext'; // Importation du contexte du panier

export default function BookSlider({ books = [] }) {
    const [showOther, setShowOther] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [bookInfo, setBookInfo] = useState(null);
    const { addToCart } = useContext(CartContext); // Récupération de la fonction d'ajout au panier

    function handleClick(direction) {
        if (!books.length) return; // Éviter les erreurs si `books` est vide

        if (direction === "left") {
            setShowOther(prev => (prev > 0 ? prev - 1 : 7));
        } else {
            setShowOther(prev => (prev < 7 ? prev + 1 : 0));
        }
    }

    function handleModal(book) {
        setBookInfo(book);
        setShowModal(true);
    }

    return (
        <div className="book-slider-container">
            <i onClick={() => handleClick("left")} className="bi bi-chevron-double-left book-slider-arrow-left"></i>
            
            <div style={{ transform: `translateX(${showOther * -20}vw)` }} className="book-slider-wrapper">
                {books.map((item) => (
                    <div key={item.id} className="book-slider-item">
                        <img
                            src={`${process.env.PUBLIC_URL}/books/${item.image}`}
                            alt={item.title}
                            className="book-slider-item-img"
                        />
                        <h2 className="book-slider-item-title">{item.title}</h2>
                        <Rating rating={item.rating} reviews={item.reviews} />
                        <div className="book-slider-item-price">
                            ${ (item.price || 0).toFixed(2) }
                        </div>
                        <div className="book-slider-item-icon">
                            <i onClick={() => handleModal(item)} className="bi bi-eye-fill"></i>
                            <i onClick={() => addToCart(item)} className="bi bi-cart"></i> {/* Ajout au panier */}
                        </div>
                    </div>
                ))}
            </div>

            <i onClick={() => handleClick("right")} className="bi bi-chevron-double-right book-slider-arrow-right"></i>

            {showModal && <Modal bookInfo={bookInfo} setShowModal={setShowModal} />}
        </div>
    );
}
