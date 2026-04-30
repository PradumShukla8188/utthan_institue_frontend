import React, { useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import Slider from "./slider";
import "./pageCss/page.css";
import missi from "../../../assets/images/misin.jpg";
import vision from "../../../assets/images/vision.jpg";
// import Events from "./event";
import OurTeam from "./ourTeam";
// import OurBlog from "./ourBlogs";
import Programmes from "./ourPrograms";

const Home: React.FC = () => {
  // const navigate = useNavigate();

  // const handleDonateClick = () => {
  //     navigate('/donate');
  // };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Slider Section */}
      <Slider />

      {/* About Us Section */}
      <div className="about-us container-fluid fade-in-section">
        <div className="container">
          <div className="row natur-row no-margin w-100">
            <div className="text-part col-md-6">
              <h2>About Our Charity</h2>
              <p>
                UTTHAN Institute of Development and Studies is a humanitarian
                and developmental endeavour of conscientious social work
                educators and practitioners initiated in 1991. UTTHAN commits
                itself to the promotion of well- being of suffering humanity.
              </p>
              {/* <p>
                                Cras faucibus laoreet nibh, sit amet tincidunt leo mollis in. Etiam eu mauris metus. Nulla facilisi. Etiam vestibulum, nisi et convallis elementum, leo orci aliquam metus, id posuere massa neque vitae arcu.
                            </p>
                            <p>
                                Integer vulputate vehicula dolor a eleifend. Duis aliquam condimentum sapien, eget tempor justo. Aenean porttitor nibh metus, sollicitudin egestas metus posuere et. Fusce egestas volutpat metus, in sodales sem bibendum porta. Nunc hendrerit nunc sit amet tellus posuere, at malesuada sem gravida. Integer maximus ultricies augue, at dapibus elit bibendum consequat. Cras faucibus tellus eleifend, fermentum purus in, dapibus sapien. Praesent nec ornare risus. Etiam iaculis, ligula vel gravida vestibulum, urna justo posuere ante, id pretium massa arcu sed mi. Nunc a sollicitudin sem. Duis tempus
                            </p> */}
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
      <section className="container-fluid mission-vision fade-in-section">
        <div className="container">
          <div className="row mission">
            <div className="col-md-6 mv-det">
              <h1>Our Mission</h1>
              <p>
                UTTHAN Institute of Development and Studies is committed to the
                promotion of well- being of suffering humanity, with the mission
                to work towards the upliftment of the society to a dignified
                status where equality of status and opportunities, and Justice
                -social, economic and political prevails, where no one dies of
                starvation, no one lives in squalor, no one is exploited of
                ignorance and illiteracy and no one is unattended at diseases.
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
                The faith in the capacity of people to change and to develop,
                and the beliefs that the human beings are the product of their
                social milieu leads us to develop an enabling and system change
                approach to the empower them to ensure better living conditions
                for themselves. The Institute believes in the quality
                intervention and humanitarian help in a participatory manner.
                Our belief pays that the organisation and people grow together
                through participation.
              </p>
            </div>
          </div>

          <div className="row vision">
            <div className="col-md-6 mv-img">
              <img src={vision} alt="" />
            </div>
            <div className="col-md-6 mv-det">
              <h1>Our Concerns</h1>
              <ul className="list-unstyled">
                <li>• Enabling people to help themselves.</li>
                <li>• Faith in the people's capacity to change and grow.</li>
                <li>• Gender Justice and Women Empowerment.</li>
                <li>• Rehabilitation of differently able persons.</li>
                <li>
                  • Sensitize people and the Govt. machinery on important
                  issues.
                </li>
                <li>
                  • Development of manpower for Social Work, development and
                  rehabilitation.
                </li>
                <li>• Crisis intervention and disaster management.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {/* <Events /> */}

      {/* Charity Numbers Section */}
      <div className="doctor-message fade-in-section">
        <div className="inner-lay">
          <div className="container">
            {/* <div className="row session-title">
              <h2>Our Achievements in Numbers</h2>
              <p>
                • Punjab and Haryana High Court recognized its Family
                Counselling Centre - MADHUR MILAN and instructed District
                Judiciary to refer cases of Family Disputes to UTTHAN for
                counselling and conciliation. • Awarded by Rotary International
                for the exemplary service to the Disabled person, 1996.
              </p>
            </div> */}
            <div className="row session-title">
              <div className="col-12">
                <h2>Our Achievements</h2>
                <ul className="achievements-list">
                  <li>
                    Punjab and Haryana High Court recognized its Family
                    Counselling Centre -<b> MADHUR MILAN </b> and instructed
                    District Judiciary to refer cases of Family Disputes to
                    UTTHAN for counselling and conciliation.
                  </li>
                  <li>
                    Awarded by Rotary International for the exemplary service to
                    the Disabled person, 1996.
                  </li>
                  <li>
                    Awarded by International Association of Lion Clubs for the
                    exemplary work to the promotion of well-being of suffering
                    humanity (Dist.-321-A2).
                  </li>
                  <li>
                    Nodal Centre for welfare of aged and Street Children in
                    Haryana, appointed by Govt. of India, MOSJE.
                  </li>
                  <li>Member Disability Coordination Committee, Haryana.</li>
                  <li>
                    Member, Haryana State Social Welfare Advisory Board
                    appointed by Central Social Welfare Board (1996-2000).
                  </li>
                  <li>
                    Member, State Committee for the Removal of Manual Scavenging
                    in Haryana.
                  </li>
                  <li>
                    Member, State Committee for the Prevention of Sexual Abuse
                    at the workplace in Haryana.
                  </li>
                </ul>

                <h3 className="appeal-title">Appeal</h3>
                <p className="appeal-text">
                  UTTHAN invites collaborations and partnerships from people,
                  NGOs, GOs and other conscientious bodies. It also entertains
                  and appreciates donations and philanthropic contributions from
                  all concerned.
                </p>
                <a href="/donate" className="btn btn-success">
                  Donate Now
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <div className="numb-card">
                  <h3>12+</h3>
                  <span>YEARS OF EXPERIENCE</span>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="numb-card">
                  <h3>1812+</h3>
                  <span>HAPPY CHILDREN</span>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="numb-card">
                  <h3>52+</h3>
                  <span>EVENTS</span>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="numb-card">
                  <h3>48+</h3>
                  <span>FUNDS RAISED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programmes Section */}
      <Programmes />

      {/* Team Section */}
      <OurTeam />

      {/* Blog Section */}
      {/* <OurBlog /> */}
    </div>
  );
};

export default Home;
