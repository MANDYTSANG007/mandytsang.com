import React from "react";
import { useParams } from "react-router-dom";

const CaseStudy = (props) => {
    const { projectData } = props;
    const { id } = useParams();
    const matchingProject = projectData.find(project => project.type === "case-study" && project.id === parseInt(id));

    if (!matchingProject) {
        return <div>No matching project found.</div>;
    }

    return (
        <div>
            {matchingProject.caseStudyContent}
        </div>
    );
};

export default CaseStudy;


