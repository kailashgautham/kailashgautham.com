const Home = ({ setUrl }) => {
    return (
        <div>
            <h1 style={{
        marginTop: 0,
        marginBottom: "1rem"
      }}>About Me</h1>
            <p style={{ textAlign: "justify" }}>Hi, I’m Kailash, a final-year undergraduate computer science student at the National University of Singapore, expecting to graduate by May 2026. While I am interested in all things computer science, my primary areas of interest are <b>back-end development</b> and <b>development in C++</b>. I am also extremely passionate about <b>operating systems</b> and <b>parallel computing</b>, which are my areas of focus at NUS.
                <br></br><br></br>In the past, I have completed a number of software engineering internships at various companies. Apart from internships, I have worked on many technically challenging projects, including <a target="_blank" href="https://github.com/kaithanos/kaithanos">KaithanOS</a> (an operating system built from scratch) and <a target="_blank" href="https://github.com/janniver/interviewace">InterviewAce</a> (your very own AI technical interviewer), which I am eager to share. This website is a comprehensive portal about me, my projects, and my interests.
                <br></br><br></br>In my free time, I like to dabble in video game development and have created a number of games, including <a target="_blank" href="https://kailash331215.itch.io/moneygame">Money Tycoon</a> and <a target="_blank" href="https://kailash331215.itch.io/tombgame">Tomb of the Lost</a>. I am also an avid reader and enjoy reading books on technology and science fiction. And just like every other CS major, I kickstart my day with a hot cup of coffee!
                <br></br><br></br>This summer, I will be interning at Goldman Sachs as a Software Engineer Intern. I will then intern with Squarepoint Capital in the fall.
                <br></br><br></br>If you're interested in learning more about my work or discussing potential opportunities, please <a style={{cursor: "pointer"}} onClick={() => {setUrl("/contact")}}>contact me here.</a> You can also view my resume <a target="_blank" href="https://read.cv/gkailash">here</a>.
                <br></br><br></br>Enjoy exploring my site!</p>
        </div>
    )
};

export default Home;

