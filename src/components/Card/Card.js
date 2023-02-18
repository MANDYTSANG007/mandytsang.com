import React, { useState } from "react";
import "./Card.css";
import Modal from "../Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Card = ({ id, title, description, repoURL, image, tools }) => {
    const [show, setShow] = useState(false);

    return (
        <div onClick={() => setShow(true)} className="card">
            <Modal
                id={id}
                image={image}
                title={title}
                description={description}
                repoURL={repoURL}
                tools={tools}
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
