import React from "react";
import utilStyles from "../styles/utils.module.css";

const Home = () => {
    return (
        <section className={utilStyles.headingMd}>
            <h1>About Me</h1>
            <p style={{ fontSize: "18px" }}>Hi, I’m Kailash, a third-year undergraduate computer science student at the National University of Singapore, expecting to graduate by May 2026. While I am interested in all things computer science, my primary areas of interest are <b>back-end development</b> and <b>development in C++</b>. I am also extremely passionate about <b>operating systems</b> and <b>parallel computing</b>, which are my areas of focus at NUS.
                <br></br><br></br>In the past, I have completed a number of software engineering internships at various companies. Apart from internships, I have worked on many technically challenging projects, including <a href="https://github.com/kaithanos/kaithanos">KaithanOS</a> (an operating system built from scratch) and <a href="https://github.com/janniver/interviewace">InterviewAce</a> (your very own AI technical interviewer), which I am eager to share. This website is a comprehensive portal about me, my projects, and my interests.
                <br></br><br></br>Oh, and just like every other CS major, I kickstart my day with a hot cup of coffee! ☕️
                <br></br><br></br>I am currently looking for a summer internship for May 2025. If you're interested in learning more about my work or discussing potential opportunities, please <a href="/contact">contact me here.</a>
                <br></br><br></br>Enjoy exploring my site!</p>
        </section>
    )
};

export default Home;

