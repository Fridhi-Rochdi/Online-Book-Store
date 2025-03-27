import BookHeading from "../../Componets/BookHeading";
import BookSlider from "../../Componets/BookSlider/BookSlider";
import Service from "../../Componets/Service/Service";
import Slider from "../../Componets/Slider/Slider";
import booksData from "../../data/Books";
export default function HomePage() {
    return (
        <div className="App">
           
            <Slider />
            <Service />
            <BookHeading title="Most Gifted" />
            <BookSlider books={booksData} />
            <BookHeading title="Best Seller" />
            <BookSlider books={booksData} />
            <BookHeading title="Most wished For" />
            <BookSlider books={booksData} />
            
        </div>
    );
}
