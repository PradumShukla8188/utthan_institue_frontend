import React, { useEffect, useState } from "react";
// import './page.css';
import image1 from '../../../assets/images/slider/slider-1.jpg';
import image2 from '../../../assets/images/slider/slider-2.jpg';
import image3 from '../../../assets/images/slider/slider-3.jpg';

interface SliderItem {
    imgSrc: string;
    title: string;
    text: string;
}

const sliderData: SliderItem[] = [
    {
        imgSrc: image1,
        title: "It's time for better help.",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
        imgSrc: image2,
        title: "Most Attractive Travel Template",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
        imgSrc: image3,
        title: "Most Stylish Free Travel Website",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
];
const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    // Automatically change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(goToNextSlide, 3000); // Change every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderData.length) % sliderData.length);
    };

    return (
        <div className="slider">
            <div className="owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div
                        className="owl-stage"
                        style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
                    >
                        {sliderData.map((item, index) => (
                            <div
                                key={index}
                                className={`owl-item ${index === currentSlide ? "active" : ""}`}
                                style={{ width: "100%" }}
                            >
                                <div className="item">
                                    <div className="slider-img">
                                        <img src={item.imgSrc} alt={`Slider Image ${index + 1}`} />
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                                <div className="slider-captions">
                                                    <h1 className="slider-title">{item.title}</h1>
                                                    <p className="slider-text hidden-xs">{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="owl-nav">
                    <div className="owl-prev" onClick={goToPrevSlide}>
                        <i className="fa fa-angle-left"></i>
                    </div>
                    <div className="owl-next" onClick={goToNextSlide}>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>
                <div className="owl-dots">
                    {sliderData.map((_, index) => (
                        <div
                            key={index}
                            className={`owl-dot ${index === currentSlide ? "active" : ""}`}
                            onClick={() => setCurrentSlide(index)}
                        >
                            <span></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
// const Slider: React.FC = () => {
//     const [currentSlide, setCurrentSlide] = useState<number>(0);

//     const goToNextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
//     };

//     const goToPrevSlide = () => {
//         setCurrentSlide(
//             (prevSlide) => (prevSlide - 1 + sliderData.length) % sliderData.length
//         );
//     };

//     return (
//         <div className="slider">
//             <div className="owl-carousel owl-loaded owl-drag">
//                 <div className="owl-stage-outer">
//                     <div className="owl-stage" style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}>
//                         {sliderData.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className={`owl-item ${index === currentSlide ? "active" : ""}`}
//                                 style={{ width: "100%" }}
//                             >
//                                 <div className="item">
//                                     <div className="slider-img">
//                                         <img src={item.imgSrc} alt={`Slider Image ${index + 1}`} />
//                                     </div>
//                                     <div className="container">
//                                         <div className="row">
//                                             <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
//                                                 <div className="slider-captions">
//                                                     <h1 className="slider-title">{item.title}</h1>
//                                                     <p className="slider-text hidden-xs">{item.text}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="owl-nav">
//                     <div className="owl-prev" onClick={goToPrevSlide}>
//                         <i className="fa fa-angle-left"></i>
//                     </div>
//                     <div className="owl-next" onClick={goToNextSlide}>
//                         <i className="fa fa-angle-right"></i>
//                     </div>
//                 </div>
//                 <div className="owl-dots">
//                     {sliderData.map((_, index) => (
//                         <div
//                             key={index}
//                             className={`owl-dot ${index === currentSlide ? "active" : ""}`}
//                             onClick={() => setCurrentSlide(index)}
//                         >
//                             <span></span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Slider;
