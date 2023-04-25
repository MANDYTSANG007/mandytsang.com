import React from "react";
import "./SalesManagementApp.css";

const SalesManagementApp = () => {
    return (
        <div className="case-study-container">
            <img
                src={require(`../../assets/project-images/sales-management-app-overview.png`)}
                alt="A Macbook and a iPhone display the drone delivery app"
                className="case-study-image"
            />
            <div className="project-header">
                <div className="section">
                    <h1 className="project-title"> Sales Management App </h1>
                    <h3>User Research &amp; UX Design</h3>
                </div>
                <div className="section">
                    <h2> Project Overview </h2>
                    <p>Carlos’ Toy Store is a brick-and-mortar retail store that has been facing challenges with its manual sales management system. The current system is outdated, cumbersome, and inefficient, which makes it difficult for the store to track sales and inventory effectively. Moreover, the manual system doesn’t integrate with the store’s online business, leading to poor visibility and control over sales and inventory across both channels. As a result, the store’s staff has been struggling to manage multiple tasks, including inventory management, sales data analysis, and store operations.</p>
                </div>
                <div className="project-detail-info">
                    <div className="project-detail-timeline">
                        <h5> Project Duration:</h5>
                        <p> April 2023 to May 2023  </p>
                    </div>
                    <div className="project-detail-my-role">
                        <h5> My Role: </h5>
                        <p> UX Designer &amp; Researcher </p>
                        <br></br>
                        <h5> My Responsibilities: </h5>
                        <p>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs.</p>
                    </div>
                    <div className="project-detail-platform">
                        <h5> Platform: </h5>
                        <p> Adobe XD </p>
                    </div>
                </div>
                <div className="section">
                    <h2>Client's Need</h2>
                    <p>The toy store's owner and staff are frustrated because they do not have a clear understanding of sales and inventory levels, making it difficult to make informed decisions about the business. The store needs an efficient sales management system that streamlines the sales and inventory process and increases visibility and control over sales and inventory across both online and retail channels.</p>
                </div>
                <div className="section">
                    <h2>Problem</h2>
                    <p>Carlos’ Toy Store uses a manual sales management system that is inefficient and difficult to integrate with their online store, resulting in a lack of visibility and control over sales and inventory.</p>
                </div>
                <div className="section">
                    <h2>Solution</h2>
                    <p>I helped to design a sales management app that will streamline the sales and inventory process, increase visibility and control over sales and inventory across both online and retail across both channels, and provide staff with more time to handle other tasks.</p>
                </div>
                <div className="section">
                    <h2>Design Process</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/design-process.png`)}
                alt="design-process"
                className="design-process-image"
            />
            <div className="project-header">
                <div className="section">
                    <h2>User Research: Summary</h2>
                    <p>I conducted interviews and created empathy maps to understand the users I’m designing for and their needs. A primary user group identified through research was the staff of Carlos’ Toy Store, including store owner, managers, and sales associates. </p>
                    <br></br>
                    <p>This user group confirmed initial assumptions about the toy store’s staff, but research also revealed that they face challenges in managing sales and inventory due to the current manual system being cumbersome and inefficient. Participants also expressed a desire for more streamlined processes and easier integration with the online store, as well as more time-saving features to help manage their daily tasks.</p>
                </div>
            </div>
            <div className="project-header">
                <div className="section">
                    <h2>Persona</h2>
                    <h4>Carlos</h4>
                    <p>Age: 50 </p>
                    <p>Family: Married, 2 college-aged children</p>
                    <p>Occupation: Small business owner</p>
                    <p>Hometown: New York City, New York</p>
                    <br></br>
                    <h4>Bio</h4>
                    <p>Carlos has been running his toy store for over a decade and has always had a passion for providing children with the best toys and games possible.
                        With the recent increase in online toy sales, Carlos now needs to find a way to manage both his in-store and online inventory. He has been facing some frustrations with the current way his customers place orders.</p>
                    <br></br>
                    <h4>Frustrations</h4>
                    <p>Carlos is experiencing mixed feelings regarding the recent increase in online toy sales. While he is happy about the growth in sales, he is also frustrated due to the challenge of managing both in-store and online inventory.</p>
                </div>
                <div className="section">
                    <h2>User Journey</h2>
                    <p>Mapping Carlos’ user journey revealed how helpful it would be for users to have access to a dedicated sales management app. </p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-user-journey-map1.png`)}
                alt="Carlos's user journey map"
                className="user-journey-image"
            />
            <img
                src={require(`../../assets/project-images/crm-user-journey-map2.png`)}
                alt="Carlos's user journey map"
                className="user-journey-image"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Paper Wireframes</h2>
                    <p>Drafting iterations of each screen of the app on paper to ensure that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I prioritized a quick and easy sales and inventory management dashboard to help user save time and easy access translate data into an interactive report.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-paper-wireframes.png`)}
                alt="Paper wireframes"
                className="paper-wireframes"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Digital Wireframes</h2>
                    <p>As the initial design phase continued, I made sure to base screen designs on feedback and findings from the user research.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-digital-wireframes1.png`)}
                alt="Digital wireframes"
                className="crm-digital-wireframes1"
            />
            <img
                src={require(`../../assets/project-images/crm-digital-wireframes2.png`)}
                alt="Digital wireframes"
                className="crm-digital-wireframes2"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Low-fidelity Prototype</h2>
                    <p>Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow includes a sales overview dashboard as the launch page, allowing users to quickly view and analyze their sales performance at a glance. This prototype could be used in a usability study.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-low-fidelity-prototype.png`)}
                alt="Low-fidelity prototype"
                className="low-fidelity-prototype"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Usability Study: Findings</h2>
                    <p>I conducted two rounds of usability studies to evaluate the sales management app's user experience and identify areas for improvement. The first study helped guide the designs from wireframes to mockups. The second study used a high-fidelity prototype and revealed what aspects of the mockups needed refining.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-usability-findings.png`)}
                alt="Usability study findings"
                className="usability-study-findings"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Design System</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-design-system.png`)}
                alt="Design system"
                className="crm-design-system"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Mockups</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-mockup1.png`)}
                alt="Mockup"
                className="crm-mockup"
            />
            <img
                src={require(`../../assets/project-images/crm-mockup2.png`)}
                alt="Mockup"
                className="crm-mockup"
            />
            <img
                src={require(`../../assets/project-images/crm-mockup3.png`)}
                alt="Mockup"
                className="crm-mockup"
            />
            <div className="project-header">
                <div className="section">
                    <h2>High-fidelity Prototype</h2>
                    <p>The final high-fidelity prototype presented cleaner user flows for download sales report and add product into the inventory.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-high-fidelity.png`)}
                alt="High-fidelity Prototype"
                className="crm-high-fidelity"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Takeaways</h2>
                    <p>The app streamline and optimize the store’s sales processes. The app can save users time and effort, enabling them to focus on growing their business. Moreover, it can provide valuable insights into sales performance, allowing users to make data-driven decisions to improve their operations.</p>
                    <br></br>
                    <p>While designing the Sales Management App, I learned that having a clear vision of its purpose and functionality is crucial. Using a paper wireframe was particularly helpful in identifying issues early in the design process, both minor and major. This allowed me to address them promptly and ensured that the app met the needs of its users.</p>
                </div>
            </div>
            <div className="project-header">
                <div className="section">
                    <h2>Next Steps</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/crm-next-steps.png`)}
                alt="Next steps"
                className="next-steps"
            />
        </div>

    )
}

export default SalesManagementApp;