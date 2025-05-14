import React from 'react';

const Portfolio = ({ portfolio }) => {
    const { title, description, link } = portfolio;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a target="_blank" href={link}>View</a>
        </div>
    );
};

export default Portfolio;