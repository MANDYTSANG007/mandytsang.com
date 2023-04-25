import React from "react";
import "./ViewMoreButton.css";
import { Link } from "react-router-dom"

const ViewMoreButton = ({ toPortfolio }) => {
    return (
        <Link to={toPortfolio} >
            <button className="view-more-button">
                View More Projects
            </button>
        </Link>
    )
}

export default ViewMoreButton;