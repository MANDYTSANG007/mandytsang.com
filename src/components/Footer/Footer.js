import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer">
                <img
                    src={require("../../assets/t-logo.png")}
                    alt="logo"
                    className="footer-logo"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <div className="footer-copyright">
                    <p>Design &amp; Code by Mandy Tsang &copy; 2023. All rights reserved. </p>
                </div>
        </footer>
    )
}

export default Footer;


// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <img
//                     src={require("../../assets/t-logo.png")}
//                     alt="logo"
//                     className="footer-logo"
//                 />
//                 <div className="footer-nav">
//                     <div className="footer-column">
//                         <h5 className="footer-title"> Menu </h5>
//                         <ul className="footer-list">
//                             <li><Link to="/"> Home </Link></li>
//                             <li><Link to="/portfolio"> Portfolio </Link></li>
//                             <li><Link to="/contact"> Contact </Link></li>
//                         </ul>
//                     </div>
//                     <div className="footer-column">
//                         <h5 className="footer-title"> Social Media </h5>
//                         <ul className="footer-list">
//                             <li><a href="https://github.com/MANDYTSANG007" target="_blank" rel="noopener noreferrer"> GitHub </a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="footer-copyright">
//                     <h5> Design &amp; Code by Mandy Tsang &copy; 2023. All rights reserved. </h5>
//                 </div>
//             </div>
//         </footer>
//     )
// }
// export default Footer;