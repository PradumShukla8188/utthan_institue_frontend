import React from "react";
import img1 from "../../../assets/images/team/team-memb1.jpg";
import img2 from "../../../assets/images/team/team-memb2.jpg";
import img3 from "../../../assets/images/team/team-memb3.jpg";
import img4 from "../../../assets/images/team/team-memb4.jpg";

interface TeamMember {
  imageSrc: string;
  name: string;
  role: string;
}

const teamData: TeamMember[] = [
  {
    imageSrc: img1,
    name: "David Kanuel",
    role: "CEO",
  },
  {
    imageSrc: img2,
    name: "David Kanuel",
    role: "CFO",
  },
  {
    imageSrc: img3,
    name: "David Kanuel",
    role: "Team Leader",
  },
  {
    imageSrc: img4,
    name: "David Kanuel",
    role: "Project Manager",
  },
];

const OurTeam: React.FC = () => {
  return (
    <section className="our-team team-11">
      <div className="container">
        <div className="session-title row">
          <h2>Our Team</h2>
          <p>
            UTTHAN has a multi-disciplinary team of professionals from social
            work, management, medicine, development and law etc. Besides, it has
            a band of Para-workers placed over 127 villages across Haryana. At
            present, the Institute has a strong, committed team of over 45
            persons from different disciplines on its rolls besides about 500
            para workers and volunteers.
          </p>
        </div>

        <div className="session-title row">
          <h2>INFRASTRUCTURE:</h2>
          <p>
            UTTHAN Institute of Development & Studies has adequate space
            inhabiting its different projects, and over 5000 sq. mtrs of public
            land to organize open air activities. Besides, UTTHAN has activities
            in over 127 villages and its different projects scattered across the
            State. It has vehicles to facilitate field operations and well
            equipped training and conference hall with all modern office
            facilities.
          </p>
        </div>
        {/* <div className="row team-row">
          {teamData.map((member, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="single-usr">
                <img src={member.imageSrc} alt={member.name} />
                <div className="det-o">
                  <h4>{member.name}</h4>
                  <i>{member.role}</i>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default OurTeam;
