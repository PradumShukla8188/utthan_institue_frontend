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

const categories = [
    { id: "all", name: "All" },
    { id: "finance", name: "Finance" },
    { id: "digital-marketing", name: "Digital Marketing" },
    { id: "money", name: "Money" },
    { id: "business-analysis", name: "Business Analysis" },
];

const galleryImages = [
    { id: 1, category: "finance", src: img1 },
    { id: 2, category: "digital-marketing", src: img2 },
    { id: 3, category: "finance", src: img3 },
    { id: 4, category: "business-analysis", src: img4 },
    { id: 5, category: "money", src: img5 },
    { id: 6, category: "money", src: img6 },
    { id: 7, category: "business-analysis", src: img7 },
    { id: 8, category: "business-analysis", src: img8 },
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
