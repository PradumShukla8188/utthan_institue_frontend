import React from "react";
import img1 from '../../../assets/images/team/team-memb1.jpg';
import img2 from '../../../assets/images/team/team-memb2.jpg';
import img3 from '../../../assets/images/team/team-memb3.jpg';
import img4 from '../../../assets/images/team/team-memb4.jpg';



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
                    <h2>Meet our Team</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit
                        velit
                    </p>
                </div>
                <div className="row team-row">
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
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
