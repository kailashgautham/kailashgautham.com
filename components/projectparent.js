import React from 'react';
import Project from './project';

const ProjectParent = ({ projects }) => {
    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div style={{paddingBottom: "1.5rem"}}>
                    <Project
                        project={project}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectParent;