import React, { useEffect, useState } from "react";
import "../pages/pageCss/slider.css"; // new css file for slider styles

// Import images
// import image1 from "../../../assets/images/slider/slider-1.jpg";
// import image2 from "../../../assets/images/slider/slider-2.jpg";
// import image3 from "../../../assets/images/slider/slider-3.jpg";
// import image11 from "../../../assets/images/slider/m8.jpeg";
// import image7 from "../../../assets/images/slider/m4-d.jpg";

import image4 from "../../../assets/images/slider/m1.jpeg";
import image5 from "../../../assets/images/slider/m2.jpeg";
import image6 from "../../../assets/images/slider/m3.jpeg";
import image8 from "../../../assets/images/slider/m5.jpeg";
import image9 from "../../../assets/images/slider/m6.jpeg";
import image10 from "../../../assets/images/slider/m7.jpeg";
import image12 from "../../../assets/images/slider/l1.jpeg";
import image13 from "../../../assets/images/slider/l2.jpeg";
import image14 from "../../../assets/images/slider/l3.jpeg";
import image15 from "../../../assets/images/slider/l4.jpeg";
import image16 from "../../../assets/images/slider/l5.jpeg";
import image17 from "../../../assets/images/slider/l6.jpeg";
import image18 from "../../../assets/images/slider/l7.jpeg";
import image19 from "../../../assets/images/slider/l8.jpeg";
import image20 from "../../../assets/images/slider/l9.jpeg";
import image21 from "../../../assets/images/slider/l10.jpeg";
import image22 from "../../../assets/images/slider/l11.jpeg";


interface SliderItem {
  imgSrc: string;
  title: string;
  text: string;
}

// Build slider data automatically
const sliderData: SliderItem[] = [
  // { imgSrc: image1, title: "It's time for better help.", text: "We are here to support your journey with care and dedication." },
  // { imgSrc: image2, title: "Most Attractive Travel Template", text: "Explore beautiful destinations with our amazing travel packages." },
  // { imgSrc: image3, title: "Most Stylish Free Travel Website", text: "Designed for modern travelers who love adventure and comfort." },
  { imgSrc: image4, title: "Empowering Students", text: "Education is the key to unlock the golden door of freedom." },
  { imgSrc: image5, title: "Helping Hands", text: "Together we can bring a positive change in the community." },
  { imgSrc: image6, title: "Innovation & Growth", text: "Driving success through creativity and innovation." },
  { imgSrc: image8, title: "Sustainable Future", text: "Building a better tomorrow for future generations." },
  { imgSrc: image9, title: "Women Empowerment", text: "Strengthening communities by empowering women." },
  { imgSrc: image10, title: "Skill Development", text: "Equipping youth with essential skills for success." },
  { imgSrc: image12, title: "Learning for All", text: "Education is the foundation for a brighter tomorrow." },
  { imgSrc: image13, title: "Growth Together", text: "Progress is best when we achieve it together." },
  { imgSrc: image14, title: "Inspiration Daily", text: "Stay motivated and inspired every single day." },
  { imgSrc: image15, title: "Leadership", text: "Great leaders build great communities." },
  { imgSrc: image16, title: "Innovation Hub", text: "Turning ideas into impactful realities." },
  { imgSrc: image17, title: "Future Leaders", text: "Empowering the next generation of leaders." },
  { imgSrc: image18, title: "Unity", text: "Stronger when we stand together." },
  { imgSrc: image19, title: "Bright Minds", text: "Nurturing creativity and intelligence." },
  { imgSrc: image20, title: "Excellence", text: "Commitment to excellence in all we do." },
  { imgSrc: image21, title: "Support System", text: "Because everyone deserves a helping hand." },
  { imgSrc: image22, title: "Community Love", text: "Together we create meaningful impact." }
];


const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div className="slider">
      {sliderData.map((item, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
          <div className="caption">
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button className="prev" onClick={goToPrevSlide}>❮</button>
      <button className="next" onClick={goToNextSlide}>❯</button>

      {/* Dots */}
      <div className="dots">
        {sliderData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// export default Slider;

// import React, { useEffect, useState } from "react";
// // import './page.css';
// import image1 from '../../../assets/images/slider/slider-1.jpg';
// import image2 from '../../../assets/images/slider/slider-2.jpg';
// import image3 from '../../../assets/images/slider/slider-3.jpg';
// import image4 from '../../../assets/images/slider/m1.jpeg';
// import image5 from '../../../assets/images/slider/m2.jpeg';
// import image6 from '../../../assets/images/slider/m3.jpeg'; 
// import image7 from '../../../assets/images/slider/m4.jpeg';
// import image8 from '../../../assets/images/slider/m5.jpeg';
// import image9 from '../../../assets/images/slider/m6.jpeg';
// import image10 from '../../../assets/images/slider/m7.jpeg';
// import image11 from '../../../assets/images/slider/m8.jpeg';


// interface SliderItem {
//     imgSrc: string;
//     title: string;
//     text: string;
// }

// const sliderData: SliderItem[] = [
//   {
//     imgSrc: image1,
//     title: "It's time for better help.",
//     text: "We are here to support your journey with care and dedication."
//   },
//   {
//     imgSrc: image2,
//     title: "Most Attractive Travel Template",
//     text: "Explore beautiful destinations with our amazing travel packages."
//   },
//   {
//     imgSrc: image3,
//     title: "Most Stylish Free Travel Website",
//     text: "Designed for modern travelers who love adventure and comfort."
//   },
//   {
//     imgSrc: image4,
//     title: "Empowering Students",
//     text: "Education is the key to unlock the golden door of freedom."
//   },
//   {
//     imgSrc: image5,
//     title: "Helping Hands",
//     text: "Together we can bring a positive change in the community."
//   },
//   {
//     imgSrc: image6,
//     title: "Innovation & Growth",
//     text: "Driving success through creativity and innovation."
//   },
//   {
//     imgSrc: image7,
//     title: "Healthcare for All",
//     text: "Ensuring healthy lives and promoting well-being."
//   },
//   {
//     imgSrc: image8,
//     title: "Sustainable Future",
//     text: "Building a better tomorrow for future generations."
//   },
//   {
//     imgSrc: image9,
//     title: "Women Empowerment",
//     text: "Strengthening communities by empowering women."
//   },
//   {
//     imgSrc: image10,
//     title: "Skill Development",
//     text: "Equipping youth with essential skills for success."
//   },
//   {
//     imgSrc: image11,
//     title: "Community Support",
//     text: "Working together to create stronger communities."
//   }
// ];
// const Slider: React.FC = () => {
//     const [currentSlide, setCurrentSlide] = useState<number>(0);

//     // Automatically change slide every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(goToNextSlide, 3000); // Change every 3 seconds
//         return () => clearInterval(interval); // Cleanup interval on component unmount
//     }, []);

//     const goToNextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
//     };

//     const goToPrevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderData.length) % sliderData.length);
//     };

//     return (
//         <div className="slider">
//             <div className="owl-carousel owl-loaded owl-drag">
//                 <div className="owl-stage-outer">
//                     <div
//                         className="owl-stage"
//                         style={{ transform: `translate3d(-${currentSlide * 100}%, 0, 0)` }}
//                     >
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
