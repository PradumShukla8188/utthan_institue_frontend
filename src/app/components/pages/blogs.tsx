import React from "react";
import img1 from '../../../assets/images/events/image_01.jpg';
import img2 from '../../../assets/images/events/image_02.jpg';
import img3 from '../../../assets/images/events/image_03.jpg';
import img4 from '../../../assets/images/events/image_04.jpg';
import img5 from '../../../assets/images/events/image_05.jpg';
import img6 from '../../../assets/images/events/image_06.jpg';
import './pageCss/blog.css'
interface BlogPost {
    id: number;
    title: string;
    image: string;
    date: string;
    description: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Methods of Recruitment",
        image: img1,
        date: "August 10, 2018",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque...",
    },
    {
        id: 2,
        title: "Strategies for Hiring",
        image: img2,
        date: "August 12, 2018",
        description:
            "Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent...",
    },
    {
        id: 3,
        title: "Digital Marketing Trends",
        image: img3,
        date: "August 15, 2018",
        description:
            "Aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus...",
    },
    {
        id: 4,
        title: "Business Growth Tips",
        image: img4,
        date: "August 20, 2018",
        description:
            "Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros...",
    },
    {
        id: 5,
        title: "Financial Planning Guide",
        image: img5,
        date: "August 25, 2018",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet...",
    },
    {
        id: 6,
        title: "Success in Business",
        image: img6,
        date: "August 30, 2018",
        description:
            "Vivamus arcu metus, mattis sed sagittis at, sagittis quis neque. Praesent...",
    },
];

const Blog: React.FC = () => {
    return (
        <section className="blog-container">
            <div className="page-nav">
                <h2>Our Blog</h2>
                <ul>
                    <li>
                        <a href="#"><i className="fas fa-home"></i> Home</a>
                    </li>
                    <li><i className="fas fa-angle-double-right"></i> Blog</li>
                </ul>
            </div>

            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <div className="blog-image">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="blog-content">
                            <small>By Admin | {post.date}</small>
                            <h4>{post.title}</h4>
                            <p>{post.description}</p>
                            <div className="link">
                                <a href="#">Read more</a>
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
