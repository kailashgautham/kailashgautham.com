import React from 'react';

const Project = ({ project }) => {
    const { duration, title, description, link } = project;

    return (
        <div>
            <h5 style={{margin: "0"}}>{duration}</h5>
            <h2>{title}</h2>
            <p>{description}</p>
            <a target="_blank" href={link}>View</a>
        </div>
    );
};

export default Project;