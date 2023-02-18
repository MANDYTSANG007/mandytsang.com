import React from "react";
import "./Portfolio.css";
import Card from "../Card/Card";
import { projectData } from "../../data/project-data";

const Portfolio = () => {
    return (
        <main className="portfolio">
            <h1 className="title"> Projects </h1>
            <div className="content">
                {projectData.map(projectData => (
                    <Card
                        key={projectData.id}
                        id={projectData.id}
                        title={projectData.title}
                        description={projectData.description}
                        repoURL={projectData.repoURL}
                        image={projectData.imagePath}
                        tools={projectData.tools}
                    />
                ))}
            </div>
        </main>
    )
}
export default Portfolio;



