import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ id, type, image, title, description, repoURL, demoURL, caseStudyContent, myRoles, tool, techStack, onClose, show }) => {

    return (
        <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img className="modal-image" alt={title} src={image} />
                <div className="modal-header">
                    <h6 className="modal-title">{title}</h6>
                </div>
                <div className="modal-body">
                    {description}
                    <div className="modal-roles-container">
                        <p>Roles: </p>
                        {myRoles.map((role, index) => (
                            <span key={role}>
                                {role}
                                {index !== myRoles.length - 1 ? ",\u00A0 " : ""}
                            </span>
                        ))}
                    </div>
                    <div className="modal-tool-container">
                        <FontAwesomeIcon className="gear-icon" icon={faGear} size="1x" />
                        <p> {tool ? "Tool: " : "Tech Stack: "} </p>
                        {tool ? (
                            tool.map((tool) => (
                                <p key={tool} className="modal-tools">{tool}</p>
                            ))
                        ) : (
                            techStack.map((tech) => (
                                <p key={tech} className="modal-tool">{tech}</p>
                            ))
                        )}
                    </div>
                </div>

                <div className="modal-footer">
                    {repoURL ? <a href={repoURL} target="_blank" rel="noopener noreferrer" className="modal-link"> Details </a> : ""}
                    {demoURL ? <a href={demoURL} target="_blank" rel="noopener noreferrer" className="modal-link"> Demo </a> : ""}
                    {/* {type === "case-study" && caseStudyContent ? <Link to={`/case-study/${id}`} target="_blank" rel="noopener noreferrer" className="modal-link"> Read Case Study </Link> : ""} */}
                    {type === "case-study" && caseStudyContent ? <Link to={`/case-study/${id}`} className="modal-link"> Read Case Study </Link> : ""}
                    <button onClick={onClose} className="modal-button"> Close </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;
