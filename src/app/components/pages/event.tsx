import React from "react";
import img1 from '../../../assets/images/events/image_01.jpg';
import img2 from '../../../assets/images/events/image_02.jpg';
import img3 from '../../../assets/images/events/image_03.jpg';


interface Event {
    imageSrc: string;
    title: string;
    raisedAmount: number;
    goalAmount: number;
    description: string;
}

const eventsData: Event[] = [
    {
        imageSrc: img1,
        title: "Child Education in Africa",
        raisedAmount: 34425,
        goalAmount: 500000,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        imageSrc: img2,
        title: "Child Education in Africa",
        raisedAmount: 34425,
        goalAmount: 500000,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        imageSrc: img3,
        title: "Child Education in Africa",
        raisedAmount: 34425,
        goalAmount: 500000,
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
];

const Events: React.FC = () => {
    return (
        <section className="events">
            <div className="container">
                <div className="session-title row">
                    <h2>Popular Causes</h2>
                    <p>We are a non-profit & Charity raising money for child education</p>
                </div>
                <div className="event-ro row">
                    {eventsData.map((event, index) => (
                        <div className="col-md-4 col-sm-6" key={index}>
                            <div className="event-box">
                                <img src={event.imageSrc} alt={event.title} />
                                <h4>{event.title}</h4>
                                <p className="raises">
                                    <span>
                                        Raised: ${event.raisedAmount.toLocaleString()} / $
                                        {event.goalAmount.toLocaleString()}
                                    </span>
                                </p>
                                <p className="desic">{event.description}</p>
                                <button className="btn btn-success btn-sm">Donate Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
