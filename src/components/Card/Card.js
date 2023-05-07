import React, { useState } from "react";
import "./Card.css";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Card = ({ id, type, title, description, repoURL, demoURL, caseStudyContent, image, myRoles, tool, techStack }) => {
    const [show, setShow] = useState(false);

    return (
        <div onClick={() => setShow(true)} className="card">
            <Modal
                id={id}
                image={image}
                type={type}
                title={title}
                description={description}
                repoURL={repoURL}
                demoURL={demoURL}
                caseStudyContent={{caseStudyContent}}
                myRoles={myRoles}
                tool={tool}
                techStack={techStack}
                onClose={() => setShow(false)}
                show={show} 
            />
            <img className="card-img" alt={title} src={image} />
            <div className="overlay">
                <div className="overlay-content">
                    {title}
                </div>
                <FontAwesomeIcon className="overlay-icon" icon={faPlus} size="2x" />
            </div>
        </div>
    )
}

export default Card;
