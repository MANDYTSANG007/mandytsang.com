import React, { useEffect } from "react";
import "./Portfolio.css";
import Card from "../Card/Card";
import { projectData } from "../../data/project-data";
import ViewMoreButton from "../ViewMoreButton/ViewMoreButton";

const Portfolio = ({ showFeatured, showButton }) => {
    const isPortfolioPage = window.location.pathname === "/portfolio";

    // Scroll the window back to the top of the page when the component mounts 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter the 'projectData' array based on the 'showFeatured' 
    let projects = projectData;
    if (showFeatured) {
        projects = projectData.filter(project => project.featured);
    }

    return (
        <main className="portfolio">
            {/* Check current page location */}
            {isPortfolioPage && (
                <div className="portfolio-description">
                    <p>This is where I showcase my latest projects that reflect my skills and passion for innovation. As you browse through my work, you'll notice that this page is constantly evolving - just like my skills and passion for creating innovative solutions. <br /><br />With each project, I strive to push my boundaries and challenge myself to create cutting-edge solutions. Feel free to explore my work and join me on this exciting journey of growth and creativity!</p>
                </div>
            )}
            {/* Create card component for projects that are not hidden */}
            <div className="content">
                {projects.map((projectData) =>
                    !projectData.hidden ? (
                        <Card
                            key={projectData.id}
                            id={projectData.id}
                            type={projectData.type}
                            title={projectData.title}
                            description={projectData.description}
                            repoURL={projectData.repoURL}
                            demoURL={projectData.demoURL}
                            caseStudyURL={projectData.caseStudyContent}
                            image={projectData.imagePath}
                            myRoles={projectData.myRoles}
                            tool={projectData.tool}
                            techStack={projectData.techStack}
                        />
                    ) : null)}
            </div>
            {showButton && <ViewMoreButton toPortfolio={'/portfolio'} />}
        </main>
    )
}
export default Portfolio;



