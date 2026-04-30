import React from 'react';
import img1 from '../../../assets/images/events/image_01.jpg';
import img2 from '../../../assets/images/events/image_02.jpg';
import img3 from '../../../assets/images/events/image_03.jpg';


interface BlogPost {
    imageSrc: string;
    date: string;
    title: string;
    description: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        imageSrc: img1,
        date: "By Admin | August 10 2018",
        title: "Methods of Recuirtments",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
        link: "#",
    },
    {
        imageSrc: img2,
        date: "By Admin | August 10 2018",
        title: "Methods of Recuirtments",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
        link: "#",
    },
    {
        imageSrc: img3,
        date: "By Admin | August 10 2018",
        title: "Methods of Recuirtments",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent.",
        link: "#",
    },
];

const OurBlog: React.FC = () => {
    return (
        <section className="our-blog">
            <div className="container">
                <div className="row session-title">
                    <h2>Our Blog</h2>
                    <p>Take a look at what people say about US</p>
                </div>
                <div className="blog-row row">
                    {blogPosts.map((post, index) => (
                        <div className="col-md-4 col-sm-6" key={index}>
                            <div className="single-blog">
                                <figure>
                                    <img src={post.imageSrc} alt={`Blog Post ${index + 1}`} />
                                </figure>
                                <div className="blog-detail">
                                    <small>{post.date}</small>
                                    <h4>{post.title}</h4>
                                    <p>{post.description}</p>
                                    <div className="link">
                                        <a href={post.link}>Read more</a>
                                        <i className="fas fa-long-arrow-alt-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBlog;
