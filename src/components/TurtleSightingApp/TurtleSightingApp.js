import React from "react";
import "./TurtleSightingApp.css";

const TurtleSightingApp = () => {
    return (
        <div className="case-study-container">
            <img
                src={require(`../../assets/project-images/turtle-sighting-app-web-size.png`)}
                alt="A Macbook and a iPhone display the Turtle Sighting App"
                className="turtle-case-study"
            />
            <div className="project-header">
                <div className="section">
                    <h1 className="project-title"> Turtle Report Sighting App </h1>
                    <h3>UX Design</h3>
                </div>
                <div className="section">
                    <h2> Project Overview </h2>
                    <p>Turtle Explorer is a mobile app and website designed to promote sea turtle conservation by encouraging users to report sightings of sea turtles. The primary target audience is anyone who cares about sea turtle conservation. The app is designed to be accessible to a wide range of users, regardless of their age or level of knowledge about sea turtles.</p>
                </div>
                <div className="project-detail-info">
                    <div className="project-detail-timeline">
                        <h5> Timeline: </h5>
                        <p> One Month </p>
                    </div>
                    <div className="project-detail-my-role">
                        <h5> My Role: </h5>
                        <p> UX Designer &amp; Researcher </p>
                    </div>
                    <div className="project-detail-my-role">
                        <h5> My Responsibilities: </h5>
                        <p> Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs and responsive design. </p>
                    </div>
                    <div className="project-detail-platform">
                        <h5> Platform: </h5>
                        <p> Adobe XD </p>
                    </div>
                </div>
                <div className="section">
                    <h2>Client's Need</h2>
                    <p>Turtle Explorer has an outdated website and app. They want to improve their exisitng app and provide a website that allows users to easily report turtle sightings. This will help them gather important data on turtle populations and better understand the needs of the turtles in the area. It will also provide an opportunity to engage with the community and raise awareness about turtle conservation efforts.</p>
                </div>
                <div className="section">
                    <h2>Problem</h2>
                    <p>Turtle Explorer has an existing app and website, but they lack a key feature of allowing users to report turtle sightings. This is a major problem for the organization as they rely on this data to monitor the turtle population and track their movements.</p>
                </div>
                <div className="section">
                    <h2>Solution</h2>
                    <p>I undertook a redesign of their website and app, ensuring a clear hierarchy and intuitive user flow for users. To facilitate the report sighting process, I incorporated process indicator features, presenting users with easily understandable and distinct steps. In contrast to a traditional form layout, this approach ensures a streamlined user experience. Furthermore, the new design is responsive, enabling users to access the report sighting feature from any device.</p>
                </div>
                <div className="section">
                    <h2>Design Process</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/design-process.png`)}
                alt="Sonia's user journey map"
                className="user-journey-image"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Persona</h2>
                    <h4>Sonia</h4>
                    <p>Age: 28 </p>
                    <p>Education: PhD in Marine Biology</p>
                    <p>Hometown: Newport Beach, CA</p>
                    <br></br>
                    <h4>Bio</h4>
                    <p>Sonia is dedicated to protecting endangered species, especially sea turtles. She is looking for a tool that can help her track the movements and behaviors of the endangered species of turtles she is currently studying, so that she can better understand their habits and create conservation strategies to protect them.</p>
                    <br></br>
                    <h4>Goal</h4>
                    <p>Sonia wants to support the conservation of endangered species and to connect with others who share her passion for environmental sustainability.</p>
                    <br></br>
                    <h4>Frustrations</h4>
                    <p>Sonia is frustrated by the lack of resources and support for turtle conservation, and she feels disconnected from other like-minded individuals who share her passion.</p>
                </div>
                <div className="section">
                    <h2>User Journey</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/user-journey.png`)}
                alt="Sonia's user journey map"
                className="user-journey-image"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Wireframe</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/paper-wireframes.png`)}
                alt="Paper wireframes"
                className="paper-wireframes"
            />
            <div className="project-header">
                <div className="section">
                    <h2>From Paper Wireframes to Digital</h2>
                    <p>After ideating and drafting some paper wireframes, I created the initial designs that focused on reporting turtle sighting process.</p>
                    <br></br>
                    <p>I added a simple process indicator to make the process clearer and more accessible for users</p>
                    <br></br>
                    <p>Then, I created a low-fidelity prototype to prepare for usabiltiy testing.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/digital-wireframes.png`)}
                alt="Digital wireframes"
                className="digital-wireframes"
            />
            <img
                src={require(`../../assets/project-images/low-fi-prototype.png`)}
                alt="Low-fidelity prototype"
                className="digital-wireframes"

            />
            <div className="project-header">
                <div className="section">
                    <h2>Usability Study</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/parameters.png`)}
                alt="Usability study parameters"
                className="usability-study-parameters"
            />
            <img
                src={require(`../../assets/project-images/findings.png`)}
                alt="Usability study findings"
                className="usability-study-findings"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Mockups</h2>
                    <p>Based on the insights from the usability studies, I applied design changes to provide a clear reporting process indicator on top of each reporting step.</p>
                    <br></br>
                    <p>A "Report Summary" page for users to review their input before submitting is also added.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/mockup-process-indicator.png`)}
                alt="Mockup on process indicator"
                className="mockup-process-indicator"
            />
            <img
                src={require(`../../assets/project-images/mockup-confirmation.png`)}
                alt="Mockup on confirmation page"
                className="mockup-confirmation"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Design System</h2>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/turtle-design-system.png`)}
                alt="Design System"
                className="design-system"
            />
            <div className="project-header">
                <div className="section">
                    <h2>High-Fidelity Prototype</h2>
                    <p>The high-fidelity prototype followed the same user flow as the low-fidelity prototype, including design changes made after the usability study.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/hi-fi.png`)}
                alt="High-fidelity prototype"
                className="hi-fi"
            />
            <img
                src={require(`../../assets/project-images/hi-fi-prototype2.png`)}
                alt="High-fidelity prototype with flow"
                className="hi-fi-prototype"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Sitemap</h2>
                    <p>With the app designs completed, I started working on designing responsive website. I used the Turtle Explorer sitemap to guide the organizational structure of each screen’s design to ensure a cohesive and consistent experience across devices.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/sitemap.png`)}
                alt="Sitemap"
                className="sitemap"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Responsive Designs</h2>
                    <p>I optimized the designs to fit specific user needs of each device and screen size.</p>
                </div>
            </div>
            <img
                src={require(`../../assets/project-images/responsive-designs.png`)}
                alt="The designs for screen size variation included mobile, tablet, and desktop."
                className="responsive-designs"
            />
            <div className="project-header">
                <div className="section">
                    <h2>Takeaways</h2>
                    <p>The impact of this project is that it provides a platform for users to easily report sightings and contribute to sea turtle conservation efforts. By streamlining the reporting process and making it more accessible, the app has the potential to increase the number of reported sightings and improve the accuracy of data collected.</p>
                    <br></br>
                    <p>I learned the importance of conducting thorough user research and incorporating user feedback into the design process. I was able to create a more effective and user-friendly experience for reporting turtle sightings.</p>
                </div>
            </div>
        </div>

    )
}

export default TurtleSightingApp;