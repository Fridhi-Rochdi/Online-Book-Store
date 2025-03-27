import "./Slider.css";
import FirstSlider from "../../assets/Slider1.png";
import SecondSlider from "../../assets/Slider2.png";
import ThirdSlider from "../../assets/Slider3.png";
import React from "react";

export default function Slider() {
    const [slideIndex,setSlideIndex]=React.useState(0);
    function handleClick(direction){
        if(direction==="left") setSlideIndex(slideIndex>0? slideIndex-1:2)
            else setSlideIndex(slideIndex<2? slideIndex+1:0)
    }
    return (
        <div className="slider-container">
            <i onClick={()=>handleClick("left")}className="bi bi-chevron-double-left arrow-left"></i>
            <div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className="slider-wrapper">
                {/* First Slide */}
                <div className="slider first-slider">
                    <div className="slider-wrapper-img">
                        <img src={FirstSlider} alt="First Slide Image Placeholder" />
                    </div>
                    <div className="slider-wrapper-info">
                        <h1 className="slider-info-title">Lorem ipsum dolor</h1>
                        <p className="slider-info-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                {/* Second Slide */}
                <div className="slider second-slider">
                    <div className="slider-wrapper-img">
                        <img src={SecondSlider} alt="Second Slide Image" />
                    </div>
                    <div className="slider-wrapper-info">
                        <h1 className="slider-info-title">Lorem ipsum dolor</h1>
                        <p className="slider-info-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                {/* Third Slide */}
                <div className="slider third-slider">
                    <div className="slider-wrapper-img">
                        <img src={ThirdSlider} alt="Third Slide Image Placeholder" />
                    </div>
                    <div className="slider-wrapper-info">
                        <h1 className="slider-info-title">Lorem ipsum dolor</h1>
                        <p className="slider-info-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
            <i onClick={()=>handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>
        </div>
    );
}
