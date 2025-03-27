import { useParams } from "react-router-dom"
import "./Book.css"
import booksData from "../../data/Books";
import Rating from "../../Componets/BookSlider/Rating";
import React, { useContext } from "react";

import CartContext from "../../Context/CartContext";
export default function Book() {
    const { id } = useParams();
    const book = booksData.find(b => b.id === +id)
    const {addToCart}=useContext(CartContext)
    const [qty,setQty]=React.useState(1);
    return (
        <div className="book">
            <div className="book-content">
                <img src={`${process.env.PUBLIC_URL}/books/${book.image}`}
                    alt={book.title} className="book-content-img" />
                <div className="book-content-info">
                    <h1 className="book-title">{book.title}</h1>
                    <div className="book-authors">
                        by <span>{book.author}</span> (Authors)
                    </div>
                    <Rating rating={book.rating} reviews={book.reviews} />
                    <div className="book-add-to-cart">
                        <input min="1" max="100" type="number" className="book-add-to-cart-input" value={qty} onChange={e => setQty(Number(e.target.value))} />
                        <button onClick={()=>addToCart({...book,quantity:qty})} className="book-add-to-cart-btn">
                        <i className="bi bi-cart"></i>
                               Add To Cart
                        </button>
                    </div>
                </div>
            </div>
            <p className="book-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at minus ut? Eius, sed. Enim quam in nihil mollitia corrupti. Voluptas, sed officiis! Repellat optio quam ipsum ipsam, molestias aliquam
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia asperiores itaque nihil optio dolores illum illo et veniam tempore, necessitatibus at quasi magni fugit praesentium vel dicta inventore ea.
            </p>
        </div>
    )


}