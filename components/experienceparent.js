import React from 'react';
import Experience from './experience';

const ExperienceParent = ({ experiences }) => {
    console.log(experiences);
    return (
        <div>
            <h1>Work Experience</h1>
            {experiences.map((experience) => (
                <div style={{paddingBottom: "1.5rem"}}>
                    <Experience
                        experience={experience}
                    />
                </div>
            ))}
        </div>
    );
};

export default ExperienceParent;