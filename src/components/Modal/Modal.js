import React from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


const Modal = ({ id, image, title, description, repoURL, tools, onClose, show }) => {

    return (
        <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img className="modal-image" alt={title} src={image} />
                <div className="modal-header">
                    <h6 className="modal-title">{title}</h6>
                </div>
                <div className="modal-body">
                    {description}
                    <div className="modal-tools-container">
                        <FontAwesomeIcon className="gear-icon" icon={faGear} size="1x" />
                        {tools.map((tool) => (
                            <p key={tool} className="modal-tools">{tool}</p>
                        ))}
                    </div>
                </div>
                <div className="modal-footer">
                    <a href={repoURL} target="_blank" rel="noopener noreferrer" className="modal-link"> Details </a>
                    <button onClick={onClose} className="modal-button"> Close </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
