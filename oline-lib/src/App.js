import "./App.css";
import Header from './Componets/Header/Header';

import Footer from "./Componets/Footer/Footer";
import HomePage from "./Page/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Page/About-Us/AboutUs";
import ContactUs from "./Page/Contact-Us/ContactUs";
import Login from "./Page/Forms/Login/Login";
import Registre from "./Page/Forms/Registre/Registre";
import Book from "./Page/Book/Book";
import Cart from "./Page/Cart/Cart";
import Athours from "./Page/Athours/Athours";
function App() {
    return (
       <BrowserRouter >
            <Header />
            <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs/>} />  
            <Route path="/login" element={<Login />} />
            <Route path="/registre" element={<Registre />} />  
            <Route path="/book/:id" element={<Book/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/authors" element={<Athours />} />
            <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
    </BrowserRouter>
    );
}

export default App;
