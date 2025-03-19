import React from "react";
import MapComponent from "./map";

const ContactUs: React.FC = () => {
    return (
        <>
            {/* Page Navigation */}
            <div className="page-nav no-margin row">
                <div className="container">
                    <div className="row">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fas fa-home"></i> Home
                                </a>
                            </li>
                            <li>
                                <i className="fas fa-angle-double-right"></i> Contact Us
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Google Maps Section */}
            <div className="row no-margin" style={{ marginTop: "0px" }}>
                <MapComponent />
            </div>

            {/* Contact Form Section */}
            <div className="row contact-rooo no-margin">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7" style={{ padding: "20px" }}>
                            <h2>Contact Form</h2>
                            <br />
                            <div className="row cont-row">
                                <div className="col-sm-3">
                                    <label>Enter Name </label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="form-control input-sm"
                                    />
                                </div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3">
                                    <label>Email Address </label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        placeholder="Enter Email Address"
                                        className="form-control input-sm"
                                    />
                                </div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3">
                                    <label>Mobile Number</label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        placeholder="Enter Mobile Number"
                                        className="form-control input-sm"
                                    />
                                </div>
                            </div>
                            <div className="row cont-row">
                                <div className="col-sm-3">
                                    <label>Enter Message</label>
                                    <span>:</span>
                                </div>
                                <div className="col-sm-8">
                                    <textarea
                                        rows={5}
                                        placeholder="Enter Your Message"
                                        className="form-control input-sm"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "10px" }}>
                                <div className="col-sm-3" style={{ paddingTop: "10px" }}>
                                    <label></label>
                                </div>
                                <div className="col-sm-8">
                                    <button className="btn btn-primary btn-sm">Send Message</button>
                                </div>
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="col-sm-5">
                            <div className="serv" style={{ margin: "50px" }}>
                                <h2 style={{ marginTop: "10px" }}>Address</h2>
                                <p>uthhan institue of development & studies,</p>
                                <p>23/H-2, Building</p>
                                <p>Yamunanagar, Inida, YNR District</p>
                                <p>Phone: +91 8188898587</p>
                                <p>Email: support@uthan.com</p>
                                <p>Website: www.uthan.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;