import React from 'react';

const Project = ({ project }) => {
    const { title, description, technologies, link } = project;

    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p><b>Technologies: </b>{technologies}</p>
            <a target="_blank" href={link}>View</a>
        </div>
    );
};

export default Project;
