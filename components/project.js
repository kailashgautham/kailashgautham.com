import React from 'react';
import utilStyles from '../styles/utils.module.css';

const Project = ({ project }) => {
    const { duration, title, description, link } = project;

    return (
        <div>
            <h5 style={{margin: 1, padding: 1, fontSize: "18px"}}>{duration}</h5>
            <h2 style={{margin: 1, padding: 1, fontSize: "18px"}}>{title}</h2>
            <p style={{margin: 1, padding: 1, fontSize: "16px"}} >{description}</p>
            <a style={{margin: 1, padding: 1, fontSize: "16px"}} href={link}>View</a>
        </div>
    );
};

export default Project;