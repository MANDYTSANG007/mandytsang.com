import React from 'react';
import "./Home.css";
import Portfolio from "../Portfolio/Portfolio";
import Chart from "../Chart/Chart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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
        <main>
            <div className="brand">
                <h1 className="name"> Mandy Tsang </h1>
                <h3 className="title">
                    <span > UX Designer </span>
                    <span>  |  </span>
                    <span> Full Stack Developer </span>
                    <span>  |  </span>
                    <span className="dot-separator"> Researcher </span>
                </h3>
                <div className="social-icons">
                    {socials.map((item) => (
                        <a className="icons" key={item.url} href={item.url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={item.icon} size="3x" />
                        </a>
                    ))}
                </div>
            </div>
            <Portfolio showFeatured={true} showButton={true} />
            <LazyLoadComponent>
                <Chart />
            </LazyLoadComponent>
        </main>
    )
}
export default Home;