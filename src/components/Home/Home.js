import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faGithub,
        url: "https://github.com/MANDYTSANG007",
    },
    {
        icon: faLinkedin,
        url: "https://linkedin.com",
    },
    {
        icon: faEnvelope,
        url: "mailto: h.man.tsang@gmail.com",
    }
]


const Home = () => {
    return (
        <main className="home-main">
            <div className="home-background">
                <img src={require("../../assets/curiosity.jpeg")} alt="" className="background-img" />
                <h1 className="home-heading1"> Mandy Tsang </h1>
                <h3 className="home-heading2">
                    <span> Full Stack Developer </span>
                    <span>  |  </span>
                    <span> Data Analyst </span>
                </h3>
                <div className="social-icons">
                    {socials.map((item) => (
                        <a className="icons" key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={item.icon} size="3x" />
                        </a>
                    ))}
                </div>
                <section className="about">
                    <article className="about-container">
                        <h1 className="about-title"> About </h1>
                        <div className="intro-info">
                            <p>I am a full stack developer and a data analyst who love learning new technologies to stay up to date in the rapidly evolving field of software engineering.</p>
                            <br/>
                            <p>What fascinated me about the field is that I can apply my creativity, analytical skills and hands-on project management skills in developing practical solutions that 
                                deliver value to the society. 
                            </p>
                            <br/>
                            <p>In addition to my technical skills, I enjoy working with people to understand their needs and find innovative solutions that make the world a better place.</p>
                        </div>
                    </article>
                </section>
                <section className="skills">
                    <article className="skills-container">
                        <h1 className="skills-title"> Skills </h1>
                        <div className="skills-info">
                            <p>Here are some highlights of my technical skills:</p>
                            <br/>
                            <p> React, JavaScript, R, Python, SQL, Node, Express, MongoDB, Jest, Bootstrap.</p>
                        </div>

                    </article>
                </section>
            </div>
        </main>
    )
}
export default Home;