import React from 'react';
import utilStyles from '../styles/utils.module.css';

const Experience = ({ experience }) => {
    const { companyName, role, duration, description, technologies } = experience;

    return (
        <div>
            <h3 style={{margin: 1, padding: 1, fontSize: "18px"}}>{companyName}</h3>
            <p style={{margin: 1, padding: 1, fontSize: "16px"}} className={utilStyles.greyText}>{role} | {duration}</p>
            <p style={{margin: 1, padding: 1, fontSize: "16px"}} >{description}</p>
            <p style={{margin: 1, padding: 1, fontSize: "16px"}} ><b>Technologies</b>: {technologies}</p>
        </div>
    );
};

export default Experience;