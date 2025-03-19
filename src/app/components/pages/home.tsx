import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Slider from './slider';
import './pageCss/page.css';
import missi from '../../../assets/images/misin.jpg';;
import vision from '../../../assets/images/vision.jpg';
import Events from './event';
import OurTeam from './ourTeam';
import OurBlog from './ourBlogs';

const Home: React.FC = () => {
    // const navigate = useNavigate();

    // const handleDonateClick = () => {
    //     navigate('/donate');
    // };

    return (
        <div>
            {/* Slider Section */}
            <Slider />


            {/* About Us Section */}
            <div className="about-us container-fluid">
                <div className="container">
                    <div className="row natur-row no-margin w-100">
                        <div className="text-part col-md-6">
                            <h2>About Our Charity</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius faucibus ligula non congue. Suspendisse at pretium massa, sit amet vulputate nibh. Nam posuere eros dolor. Donec vel arcu sagittis, pretium nisl
                            </p>
                            <p>
                                Cras faucibus laoreet nibh, sit amet tincidunt leo mollis in. Etiam eu mauris metus. Nulla facilisi. Etiam vestibulum, nisi et convallis elementum, leo orci aliquam metus, id posuere massa neque vitae arcu.
                            </p>
                            <p>
                                Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et. Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus
                            </p>
                        </div>
                        <div className="image-part col-md-6">
                            <div className="about-quick-box row">
                                <div className="col-md-6">
                                    <div className="about-qcard">
                                        <i className="fas fa-user"></i>
                                        <p>Become a Volunteer</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-qcard">
                                        <i className="fas fa-search-dollar red"></i>
                                        <p>Quick Fundraise</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-qcard">
                                        <i className="fas fa-donate yell"></i>
                                        <p>Give Donation</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-qcard">
                                        <i className="fas fa-hands-helping blu"></i>
                                        <p>Help Someone</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission and Vision Section */}
            <section className="container-fluid mission-vision">
                <div className="container">
                    <div className="row mission">
                        <div className="col-md-6 mv-det">
                            <h1>Our Mission</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis, facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
                        </div>
                        <div className="col-md-6 mv-img">
                            <img src={missi} alt="" />
                        </div>
                    </div>
                    <div className="row vision">
                        <div className="col-md-6 mv-img">
                            <img src={vision} alt="" />
                        </div>
                        <div className="col-md-6 mv-det">
                            <h1>Our Vision</h1>
                            <p>
                                Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae, maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat vel augue eget, iaculis tristique dui.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <Events />


            {/* Charity Numbers Section */}
            <div className="doctor-message">
                <div className="inner-lay">
                    <div className="container">
                        <div className="row session-title">
                            <h2>Our Achievements in Numbers</h2>
                            <p>
                                We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities. But you can read the following facts in order to make sure of all pluses of our clinic:
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 numb">
                                <h3>12+</h3>
                                <span>YEARS OF EXPERIENCE</span>
                            </div>
                            <div className="col-sm-3 numb">
                                <h3>1812+</h3>
                                <span>HAPPY CHILDREN</span>
                            </div>
                            <div className="col-sm-3 numb">
                                <h3>52+</h3>
                                <span>EVENTS</span>
                            </div>
                            <div className="col-sm-3 numb">
                                <h3>48+</h3>
                                <span>FUNDS RAISED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <OurTeam />

            {/* Blog Section */}
            <OurBlog />

        </div>
    );
};

export default Home;