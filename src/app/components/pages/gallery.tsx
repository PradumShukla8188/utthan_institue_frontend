import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pageCss/gallery.css";
import img1 from '../../../assets/images/events/image_01.jpg';
import img2 from '../../../assets/images/events/image_02.jpg';
import img3 from '../../../assets/images/events/image_03.jpg';
import img4 from '../../../assets/images/events/image_04.jpg';
import img5 from '../../../assets/images/events/image_05.jpg';
import img6 from '../../../assets/images/events/image_06.jpg';
import img7 from '../../../assets/images/events/image_07.jpg';
import img8 from '../../../assets/images/events/image_08.jpg';

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



// const categories = [
//     { id: "all", name: "All" },
//     { id: "finance", name: "Finance" },
//     { id: "digital-marketing", name: "Digital Marketing" },
//     { id: "money", name: "Money" },
//     { id: "business-analysis", name: "Business Analysis" },
// ];

// const galleryImages = [
//     { id: 1, category: "finance", src: img1 },
//     { id: 2, category: "digital-marketing", src: img2 },
//     { id: 3, category: "finance", src: img3 },
//     { id: 4, category: "business-analysis", src: img4 },
//     { id: 5, category: "money", src: img5 },
//     { id: 6, category: "money", src: img6 },
//     { id: 7, category: "business-analysis", src: img7 },
//     { id: 8, category: "business-analysis", src: img8 },
// ];

const categories = [
  { id: "all", name: "All" },
  { id: "Mahila Suraksha and Vikas Manch", name: "Mahila Suraksha and Vikas Manch" },
  { id: "NIRAMAYA Community Health Programme", name: "NIRAMAYA Community Health Programme" },
  { id: "Social Defense and Security Division", name: "Social Defense and Security Division" },
  { id: "KOSHISH – Institute of Disability Management", name: "KOSHISH – Institute of Disability Management" },
  { id: "Issue Based Action Programme", name: "Issue Based Action Programme" },
  { id: "Development Resource Centre", name: "Development Resource Centre" },
  { id: "Tarang - Cultural and Art Wing", name: "Tarang - Cultural and Art Wing" },
];

const galleryImages = [
  { id: 1, category: "Mahila Suraksha and Vikas Manch", src: image4 },
  { id: 2, category: "Mahila Suraksha and Vikas Manch", src: image5 },
  { id: 3, category: "NIRAMAYA Community Health Programme", src: image6 },
  { id: 4, category: "Social Defense and Security Division", src: image8 },
  { id: 5, category: "KOSHISH – Institute of Disability Management", src: image9 },
  { id: 6, category: "Issue Based Action Programme", src: image10 },
  { id: 7, category: "Development Resource Centre", src: image12 },
  { id: 8, category: "Tarang - Cultural and Art Wing", src: image13 },
  { id: 9, category: "Tarang - Cultural and Art Wing", src: image14 },
  { id: 10, category: "Development Resource Centre", src: image15 },
];


const Gallery: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filter images based on selected category
    const filteredImages = selectedCategory === "all"
        ? galleryImages
        : galleryImages.filter((image) => image.category === selectedCategory);

    return (
        <div>
            {/* Page Title Section */}
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Our Gallery</h2>
                        <ul>
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right"></i> Gallery
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div id="portfolio" className="gallery">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="gallery-filter">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`btn btn-default filter-button ${selectedCategory === category.id ? "active" : ""
                                    }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Images */}
                    <div className="row gallery-grid">
                        {filteredImages.map((image) => (
                            <div className="gallery_product col-lg-3 col-md-4 col-sm-6 col-xs-12" key={image.id}>
                                <img src={image.src} className="img-responsive" alt="Gallery item" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
