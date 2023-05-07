import React from "react";
import "./DroneDeliveryApp.css";

const DroneDeliveryApp = () => {
    return (
        <div className="case-study-container">
            <img
                src={require(`../../assets/project-images/drone-delivery-app.png`)}
                alt="A Macbook and a iPhone display the drone delivery app"
                className="drone-case-study"
            />
            <div className="project-header">
                <div className="section">
                    <h1 className="project-title"> Drone Delivery App </h1>
                    <h3>UX Design</h3>
                </div>
                <div className="section">
                    <h2> Project Overview </h2>
                    <p>Speed Drones Service is a shipping company that offers drone delivery services for fast and reliable deliveries. The target audience includes customers who request fast and cost-effective delivery services, particularly those in rural areas.</p>
                </div>
                <div className="project-detail-info">
                    <div className="project-detail-timeline">
                        <h5> Timeline: </h5>
                        <p> Two Months </p>
                    </div>
                    <div className="project-detail-my-role">
                        <h5> My Role: </h5>
                        <p> UX Designer &amp; Researcher </p>
                        <br></br>
                        <h5> My Responsibilities: </h5>
                        <p>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs and responsive design.</p>
                    </div>
                    <div className="project-detail-platform">
                        <h5> Platform: </h5>
                        <p> Adobe XD </p>
                    </div>
                </div>
                <div className="section">
                    <h2>Client's Need</h2>
                    <p>Customers are frustrated with the lack of control over their deliveries. The company needs a solution that will provide customers with the ability to reschedule their deliveries and track their orders in real-time.</p>
                </div>
                <div className="section">
                    <h2>Problem</h2>
                    <p>Speed Drone Service is experiencing delivery delays that are beyond their control, causing frustration among their customers. Customers are unable to reschedule their deliveries, which further exacerbates the situation. The lack of communication and control over their orders is leading to customer dissatisfaction.</p>
                </div>
                <div className="section">
                    <h2>Solution</h2>
                    <p>To address this problem, the company asked me to design and implement a rescheduling feature within the company's existing app and website. The feature would allow customers to easily reschedule their delivery time or location in the event of unforeseen circumstances, giving them more control and flexibility over their orders.</p>
                </div>
                <div className="section">
                    <h2>Design Process</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/design-process.png`)}
                alt="Design process"
                className="design-process-image responsive-width"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Persona</h2>
                    <h4>Edward</h4>
                    <p>Age: 35 </p>
                    <p>Family: 2 young children</p>
                    <p>Occupation: Sales Engineer</p>
                    <p>Hometown: Stone Ridge, Virginia</p>
                    <br></br>
                    <h4>Bio</h4>
                    <p>Edward is a 35-year-old busy professional who has been a sales engineer for more than 10 years. He travels frequently for work and is always on-the-go. He values efficiency and convenience in his personal and professional life. He enjoys spending time with his family when he is off from work.</p>
                    <br></br>
                    <h4>Frustrations</h4>
                    <p>Edward is frustrated due to the difficulty in coordinating package delivery with his busy travel schedule.</p>
                </div>
                <div className="section">
                    <h2>User Journey</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-user-journey.png`)}
                alt="Edward's user journey map"
                className="user-journey-image responsive-width"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Sitemap</h2>
                    <p>To help users easily navigate the website, I created a sitemap. My goal here was to make strategic information architecture decisions that would improve overall website navigation.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-sitemap.png`)}
                alt="Sitemap"
                className="drone-sitemap responsive-width"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Paper Wireframes</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-paper-wireframes.png`)}
                alt="Paper wireframes"
                className="drone-paper-wireframes responsive-width"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Digital Wireframes</h2>
                    <p>After ideating and drafting some paper wireframes, I transfered the design into digitial wireframes. I designed a user-friendly Navbar for easy navigation. I then organized content in three columns that is visually appealing and easy to scan. A service area map provides a visual representation of where the delivery service is available.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-digital-wireframe.png`)}
                alt="Digital wireframe design"
                className="digital-wireframe-design responsive-width"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Paper Wireframe Screen Size Variation</h2>
                    <p>Because Speed Drone Service’s customers access the site on a variety of different devices, I created a responsive design for different screen sizes to make sure the site would be fully responsive.</p>
                </div>
            </div>
            <div>
                <img
                    src={require(`../../assets/project-images/wireframe-screen-size-variation.png`)}
                    alt="A paper wireframe with a responsive design for desktop and mobile."
                    className="wireframe-screen-size-variation "
                />
                <img
                    src={require(`../../assets/project-images/drone-digital-screen-size-variation.png`)}
                    alt="A digital wireframe with a responsive design for desktop and mobile."
                    className="wireframe-screen-size-variation"
                />
            </div>
            <div className="project-header">
                <div className="section">
                    <h2>Low-fidelity Prototype</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-low-fidelity.png`)}
                alt="Low-fidelity prototype"
                className="drone-low-fidelity-prototype"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Usability Study</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-usability-parameters.png`)}
                alt="Usability study parameters"
                className="drone-usability-parameters responsive-width"
            />
            <img
                src={require(`../../assets/project-images/drone-usability-findings.png`)}
                alt="Usability study findings"
                className="drone-usability-findings"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Mockups</h2>
                    <p>Based on the insights from the usability study, I made changes to improve the site’s clarity and usability of the feature.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-mockup.png`)}
                alt="Mockup displays design before an usability study and after an useability study."
                className="drone-mockup responsive-width"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Design System</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-design-system.png`)}
                alt="Design System"
                className="design-system responsive-width"
            />
            <div className="project-header">
                <div className="section">
                    <h2>High-Fidelity Prototype</h2>
                    <p>My high-fidelity prototype followed the same user flow as the low-fidelity prototype. Only slight adjustment was made to make the design flow better and clearer to the users.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-high-fidelity.png`)}
                alt="High-fidelity prototype"
                className="drone-hi-fi responsive-width "
            />
            <div className="project-header">
                <div className="section">
                    <h2>Accessibility Considerations</h2>
                    <p>I used headings with different sized text for clear visual hierarchy. </p>
                    <br></br>
                    <p>I also used contrast color so that it can greatly impact the readability and usability of digital content for users with visual impairments.</p>
                </div>
            </div>
            <div className="project-header">
                <div className="section">
                    <h2>Takeaways</h2>
                    <p>I was able to identify pain points and design a solution that meets the users’ needs. I also enhanced a truly inclusive user experience by using color contrast and font size to make it more accessible. </p>
                    <br></br>
                    <p>I’ve learned user-centered design is key. By conducting user research, gathering feedback, and prioritizing user needs throughout the process, we were able to improve the feature that meets the needs and expectations of our target users.</p>
                </div>
            </div>
            <div className="project-header">
                <div className="section">
                    <h2>Next Steps</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/drone-next-steps.png`)}
                alt="Next steps"
                className="drone-next-steps responsive-width"
            />
        </div>

    )
}

export default DroneDeliveryApp;