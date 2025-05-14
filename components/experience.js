const Experience = ({ experience }) => {
    const { companyName, role, duration, description, technologies } = experience;

    return (
        <div>
            <h3>{companyName}</h3>
            <p style={{color: "#808080"}}>{role} | {duration}</p>
            <p>{description}</p>
            <p><b>Technologies</b>: {technologies}</p>
        </div>
    );
};

export default Experience;