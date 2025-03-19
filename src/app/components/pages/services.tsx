import React from "react";
import { Link } from "react-router-dom";
// import "./aboutUs.css"; 
import './pageCss/services.css';
import img1 from '../../../assets/images/events/image_01.jpg';
import img2 from '../../../assets/images/events/image_02.jpg';
import img3 from '../../../assets/images/events/image_03.jpg';
import img4 from '../../../assets/images/events/image_04.jpg';
import img5 from '../../../assets/images/events/image_05.jpg';
import img6 from '../../../assets/images/events/image_06.jpg';
// import img7 from '../../../assets/images/events/image_07.jpg';
// import img8 from '../../../assets/images/events/image_08.jpg';
// Define service data
const services = [
    {
        id: 1,
        title: "Child Education in Africa",
        image: img1,
        raised: "$34,425",
        goal: "$500,000",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 2,
        title: "Healthcare Support",
        image: img2,
        raised: "$20,120",
        goal: "$400,000",
        description:
            "Providing medical assistance to underprivileged communities worldwide.",
    },
    {
        id: 3,
        title: "Clean Water Initiative",
        image: img3,
        raised: "$50,000",
        goal: "$600,000",
        description:
            "Ensuring clean drinking water is available in remote locations.",
    },
    {
        id: 4,
        title: "Disaster Relief Fund",
        image: img4,
        raised: "$75,000",
        goal: "$700,000",
        description:
            "Providing aid to communities affected by natural disasters.",
    },
    {
        id: 5,
        title: "Women Empowerment",
        image: img5,
        raised: "$15,000",
        goal: "$300,000",
        description:
            "Supporting education and employment opportunities for women.",
    },
    {
        id: 6,
        title: "Food for All",
        image: img6,
        raised: "$60,500",
        goal: "$800,000",
        description:
            "Feeding programs for homeless and underprivileged families.",
    },
];

const Services: React.FC = () => {
    return (
        <div>
            {/* Page Title Section */}
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Our Services</h2>
                        <ul>
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right"></i> Services
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="services">
                <div className="container">
                    <div className="row">
                        {services.map((service) => (
                            <div className="col-md-4 col-sm-6" key={service.id}>
                                <div className="service-box">
                                    <img src={service.image} alt={service.title} />
                                    <h4>{service.title}</h4>
                                    <p className="raises">
                                        <span>Raised: {service.raised}</span> / {service.goal}
                                    </p>
                                    <p className="description">{service.description}</p>
                                    <button className="btn btn-success btn-sm">Donate Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
